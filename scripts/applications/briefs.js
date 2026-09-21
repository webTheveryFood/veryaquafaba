// Per-application briefs for the writer: decision drivers, process details and failure
// points extracted from the site's own recipes and the owner's brief (2026-09-16), each
// verified against its source (workflow application-briefs). Loaded by prompts.mjs when
// data/applications/briefs.json exists; the prose must build on them, never on "small
// batches vs large batches" alone.
import fs from 'node:fs';

const FILE = new URL('../../data/applications/briefs.json', import.meta.url);

export function loadBriefs() {
  try { return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch { return {}; }
}

// Plain-text rendering of one brief for a prompt (quotes trimmed, no digits added).
export function briefProse(brief) {
  if (!brief) return '(no brief available: build the decision on shelf life after opening and rotation, cold chain, dosing precision, storage space and production workflow, never on batch size alone)';
  const line = (i) => `- ${i.text} [${i.source}]`;
  const drv = (d) => `- ${d.driver}: favours ${d.favours}. ${d.rationale} [${d.source}]`;
  return [
    'DECISION DRIVERS for this application (build the "when" list and the answer on these):',
    ...(brief.decision_drivers || []).map(drv),
    'PROCESS DETAILS from the site recipe (use at least three, qualitatively, no figures):',
    ...(brief.process_details || []).map(line),
    'FAILURE POINTS from the recipe and guides (use at least two; say what goes wrong and why):',
    ...(brief.failure_points || []).map(line),
    'FINISHED PRODUCT STORAGE (from the recipe, qualitatively):',
    ...(brief.finished_product_storage || []).map(line),
    'ANGLES THAT MAKE THIS PAGE DIFFERENT from the other five application pages:',
    ...(brief.unique_angles || []).map((a) => `- ${a}`),
  ].join('\n');
}
