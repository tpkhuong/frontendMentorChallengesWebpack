const express = require("express");
const path = require("path");

const server = express();

// dist folder is where webpack will bundle our index and inject js file to it
const DIST_DIR = path.join(__dirname, "../../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

server.use(express.static(DIST_DIR));

server.get("/api", function testApi(req, res) {
  res.status(200).send("Hello from Api");
});

server.get("/", function testing(req, res) {
  res.status(200).sendFile(HTML_FILE);
});

server.listen(3000, function start(req, res) {
  console.log("server listening on port 3000");
});
