// Renders the app to HTML after the client build and writes it into dist/index.html,
// so the page is still an SPA but ships with its content already in the markup.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const { render } = await import(pathToFileURL('.ssr/entry-server.js').href);
const file = 'dist/index.html';
const html = readFileSync(file, 'utf8');
if (!html.includes('<!--app-html-->')) throw new Error('prerender: <!--app-html--> placeholder missing from dist/index.html');
writeFileSync(file, html.replace('<!--app-html-->', render()));
rmSync('.ssr', { recursive: true, force: true });
console.log('prerendered dist/index.html');
