const express = require("express");
const path = require("path");
require("dotenv").config();
// import path from "path";
// import express from "express";

const server = express();
// change this to dist folder once we install webpack
const DIST_DIR = path.join(__dirname, "../../frontend/src");
// change this to dist folder once we install webpack
const HTML_FILE = path.join(DIST_DIR, "index.html");

server.use(express.static(HTML_FILE));

server.get("/", function initial(req, res) {
  res.sendFile(HTML_FILE);
});

console.log(process.env.PORT);

server.listen(process.env.PORT, function startServer(req, res) {
  console.log(`Server listening on port ${process.env.PORT}`);
});
