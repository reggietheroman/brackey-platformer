const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/', (_, res) => res.sendFile('brackeys-platformer.html', { root: __dirname }));
app.listen(3000, () => console.log('http://localhost:3000'));

// server.js
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const PORT = 3000;
// const root = __dirname;

// const MIME = {
//   '.html': 'text/html',
//   '.js':   'application/javascript',
//   '.css':  'text/css',
//   '.png':  'image/png',
//   '.jpg':  'image/jpeg',
//   '.jpeg': 'image/jpeg',
//   '.gif':  'image/gif',
//   '.svg':  'image/svg+xml',
//   '.ico':  'image/x-icon',
//   '.json': 'application/json',
//   '.wasm': 'application/wasm',
//   '.mp3':  'audio/mpeg',
//   '.ogg':  'audio/ogg',
// };

// const server = http.createServer((req, res) => {
//   const urlPath = req.url === '/' ? '/brackeys-platformer.html' : req.url.split('?')[0];
//   const filePath = path.normalize(path.join(root, decodeURI(urlPath)));

//   // Prevent path traversal
//   if (!filePath.startsWith(root)) {
//     res.writeHead(403);
//     return res.end('Forbidden');
//   }

//   fs.stat(filePath, (err, stat) => {
//     if (err || !stat.isFile()) {
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       return res.end('Not Found');
//     }

//     const ext = path.extname(filePath).toLowerCase();
//     res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });

//     fs.createReadStream(filePath).pipe(res);
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });