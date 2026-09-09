// Tontin client for the applications pipeline (local only, :3002).
// completion (generation / repair / audit), RAG search (grounding), embeddings
// (near-duplicate audit) and the generation log. Tokens are read from
// .env.local and never printed.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const LOG_FILE = path.join(ROOT, 'data/applications/generation-log.json');

export function loadEnvLocal() {
  const f = path.join(ROOT, '.env.local');
  if (!fs.existsSync(f)) return;
  for (const line of fs.readFileSync(f, 'utf8').split(/\r?\n/)) {
    const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
loadEnvLocal();

export const TONTIN_URL = process.env.TONTIN_URL || 'http://localhost:3002';
const TOKEN = process.env.TONTIN_TOKEN;
// /api/internal/rag/* (search, ingest, embed) only accept the RAG admin token
// (TONTIN_TOKEN_3 in tontin/.env.local, stored here as TONTIN_TOKEN_EMBED).
const RAG_TOKEN = process.env.TONTIN_TOKEN_EMBED || TOKEN;

export function requireToken() {
  if (!TOKEN) { console.error('TONTIN_TOKEN missing in .env.local (copy the value of TONTIN_TOKEN_1 from tontin/.env.local)'); process.exit(2); }
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function post(pathname, body, key = TOKEN) {
  const r = await fetch(`${TONTIN_URL}${pathname}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Internal-Key': key },
    body: JSON.stringify(body),
  });
  let data = null;
  try { data = await r.json(); } catch { data = { error: (await r.text().catch(() => '')).slice(0, 200) }; }
  return { status: r.status, data };
}

// Library rule: generation only through Tontin's chain (groq / mistral / zai / cohere),
// never gemini/claude. zai (glm-4.5-flash) goes last: in DE it ignored the rules and
// left repairs unchanged (0/4 fields rewritten); cohere truncation is handled by retry.
export const GENERATION_PROVIDERS = () => ['groq', 'mistral', 'cohere', 'zai'];
// The auditor should not be the writer (cohere writes most FR pages): groq first;
// zai last, it produced false positives (asked for figures the copy must not have).
export const AUDIT_PROVIDERS = ['groq', 'mistral', 'cohere', 'zai'];

/**
 * JSON completion with retries (429, truncated output, invalid JSON).
 * @returns {{ json: object, provider: string, model: string, duration_ms: number } | null}
 */
export async function complete({ system, prompt, providers, fresh = false, maxTokens = 3000, temperature = 0.3 }) {
  let useFresh = fresh;
  for (let tries = 0; tries < 3; tries++) {
    const { status, data } = await post('/api/llm/completion', { system, prompt, json: true, temperature, maxTokens, providers, fresh: useFresh });
    if (status === 429) { console.log('   429 from Tontin, waiting 30 s'); await sleep(30000); continue; }
    if (status !== 200) { console.log(`   Tontin HTTP ${status}: ${String(data?.error || '').slice(0, 200)}`); return null; }
    if (data.truncated) { console.log('   truncated, retrying fresh'); useFresh = true; continue; }
    const text = String(data.text || '').trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
    try { return { json: JSON.parse(text), provider: data.provider, model: data.model, duration_ms: data.duration_ms }; }
    catch { console.log('   invalid JSON, retrying fresh'); useFresh = true; }
  }
  return null;
}

/**
 * Grounding: hybrid search over one or more corpora, deduplicated snippets.
 * A corpus that does not exist yet (400) or a RAG outage (500) is reported, not fatal:
 * the facts sheet is always passed to the model and the gates reject unsourced claims.
 */
export async function ragContext(queries, corpora, topK = 4) {
  const snippets = new Map();
  const used = {};
  const errors = {};
  for (const corpus of corpora) {
    for (const query of queries) {
      const { status, data } = await post('/api/internal/rag/search', { corpus, query, topK }, RAG_TOKEN);
      if (status !== 200 || !data?.ok) { errors[corpus] = String(data?.error || `HTTP ${status}`).slice(0, 160); break; }
      for (const r of data.results || []) {
        const key = String(r.content || '').trim().slice(0, 400);
        if (key && !snippets.has(key)) snippets.set(key, { corpus, score: r.rerank_score ?? r.hybrid_score ?? null });
      }
      used[corpus] = (used[corpus] || 0) + (data.results || []).length;
    }
  }
  return { snippets: [...snippets.entries()].map(([content, meta]) => ({ content, ...meta })), used, errors };
}

/** Embeddings (mistral-embed via Tontin), batches of 50. Returns null when unavailable. */
export async function embed(texts) {
  const out = [];
  for (let i = 0; i < texts.length; i += 50) {
    const { status, data } = await post('/api/internal/rag/embed', { texts: texts.slice(i, i + 50) }, RAG_TOKEN);
    if (status !== 200 || !data?.ok) { console.log(`   embeddings unavailable: ${String(data?.error || `HTTP ${status}`).slice(0, 160)}`); return null; }
    out.push(...data.embeddings);
  }
  return out;
}

export function cosine(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) { dot += a[i] * b[i]; na += a[i] * a[i]; nb += b[i] * b[i]; }
  const d = Math.sqrt(na) * Math.sqrt(nb);
  return d ? dot / d : 0;
}

// ---- generation log: one record per page, the audit trail of how the copy was made ----
export function readLog() {
  return fs.existsSync(LOG_FILE) ? JSON.parse(fs.readFileSync(LOG_FILE, 'utf8')) : {};
}
export function logPage(key, patch) {
  const log = readLog();
  log[key] = { ...(log[key] || {}), ...patch, updated: new Date().toISOString() };
  fs.writeFileSync(LOG_FILE, `${JSON.stringify(log, null, 2)}\n`);
  return log[key];
}
