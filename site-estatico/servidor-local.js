/* Ceres Brigadeiros — servidor local (duplo clique em abrir-site.bat) */
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8317;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

http
  .createServer((req, res) => {
    let file = path.join(__dirname, decodeURIComponent(req.url.split("?")[0]));
    if (!file.startsWith(__dirname)) {
      res.writeHead(403).end("403");
      return;
    }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
    fs.readFile(file, (err, buf) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("404");
        return;
      }
      res.writeHead(200, { "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream" });
      res.end(buf);
    });
  })
  .listen(PORT, () => console.log(`Site no ar em http://127.0.0.1:${PORT}/ (feche esta janela para parar)`));
