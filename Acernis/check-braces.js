const fs = require('fs');
const src = fs.readFileSync('lib/i18n.tsx', 'utf8');
let depth = 0, inStr = false, strChar = '', esc = false;
const m = {};
for (let i = 0; i < src.length; i++) {
  const c = src[i];
  if (esc) { esc = false; continue; }
  if (!inStr && c === '\\') { esc = true; continue; }
  if (!inStr && (c === '"' || c === "'")) { inStr = true; strChar = c; continue; }
  if (inStr && c === strChar) { inStr = false; continue; }
  if (inStr) continue;
  if (c === '{') depth++;
  if (c === '}') {
    depth--;
    const ln = src.slice(0, i).split('\n').length;
    if (depth <= 1) m[depth] = (m[depth] || []).concat(ln);
  }
}
console.log('Final depth:', depth);
console.log('d1 last 5:', (m[1] || []).slice(-5));
console.log('d0 last 3:', (m[0] || []).slice(-3));
