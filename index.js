const path = require("path");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{

    console.log("Request URL:", req.url);

    let filePath = path.join(
      __dirname,
      "public",
      req.url === "/" ? "index.html" : req.url
    );

    const extname = path.extname(filePath);
    console.log(extname);
    let contentType = "text/html";

    switch (extname) {
        case ".js":
          contentType = "text/javascript";
          break;
        case ".css":
          contentType = "text/css";
          break;
        case ".json":
          contentType = "application/json";
          break;
        case ".png":
          contentType = "image/png";
          break;
        case ".jpg":
        case ".jpeg":
          contentType = "image/jpeg";
          break;
        case ".gif":
          contentType = "image/gif";
          break;
        case ".svg":
          contentType = "image/svg+xml";
          break;
    }
    
    // Read the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
        if (err.code === "ENOENT") {
            // File not found → send 404 page
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Not Found</h1>");
        } else {
            // Some server error
            res.writeHead(500);
            res.end("Server Error: " + err.code);
        }
        } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
        }
    });

});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);