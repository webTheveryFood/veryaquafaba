// Table helpers shared by the cocktail text modules (cocktails.en.js, cocktails-2.en.js).

export const fixTable = (rows, [h1, h2, h3] = ['What you see', 'Why', 'Fix']) => `<table class="va-guide-grid va-guide-grid--fix">
<thead><tr><th scope="col">${h1}</th><th scope="col">${h2}</th><th scope="col">${h3}</th></tr></thead>
<tbody>
${rows.map(([see, why, fix]) => `<tr><td data-label="${h1}">${see}</td><td data-label="${h2}">${why}</td><td data-label="${h3}">${fix}</td></tr>`).join('\n')}
</tbody>
</table>`;

export const table = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
