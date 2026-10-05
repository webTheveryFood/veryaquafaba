// Table helpers shared by the cocktail text modules (cocktails.en.js, cocktails-2.en.js).

export const fixTable = (rows) => `<table class="va-guide-grid va-guide-grid--fix">
<thead><tr><th scope="col">What you see</th><th scope="col">Why</th><th scope="col">Fix</th></tr></thead>
<tbody>
${rows.map(([see, why, fix]) => `<tr><td data-label="What you see">${see}</td><td data-label="Why">${why}</td><td data-label="Fix">${fix}</td></tr>`).join('\n')}
</tbody>
</table>`;

export const table = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
