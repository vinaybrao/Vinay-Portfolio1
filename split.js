const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const styleRegex = /<style>([\s\S]*?)<\/style>/i;
const scriptRegex = /<script>([\s\S]*?)<\/script>/i;

const styleMatch = html.match(styleRegex);
const scriptMatch = html.match(scriptRegex);

if (styleMatch) {
  fs.writeFileSync('styles.css', styleMatch[1].trim());
}

if (scriptMatch) {
  fs.writeFileSync('app.js', scriptMatch[1].trim());
}

let newHtml = html;
if (styleMatch) {
  newHtml = newHtml.replace(styleRegex, '<link rel="stylesheet" href="styles.css">');
}
if (scriptMatch) {
  newHtml = newHtml.replace(scriptRegex, '<script src="app.js" defer></script>');
}

fs.writeFileSync('index.html', newHtml);
console.log('Successfully split index.html into styles.css and app.js');
