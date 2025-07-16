
```javascript
function optimizeCode(code) {
  // Remove unnecessary semicolons
  code = code.replace(/;[ \t]*\}$/gm, '$');

  // Add missing braces for single-line statements
  code = code.replace(/(if|while|for)\b[^{]/g, '$1 {');

  // Add missing braces for multi-line statements
  code = code.replace(/\{\s*([^{]+)\}/g, '{ $1 }');

  return code;
}
