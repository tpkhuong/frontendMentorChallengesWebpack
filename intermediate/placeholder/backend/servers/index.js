const express = require("express");
const server = express();
const path = require("path");
const connectDB = require("../config/database");

connectDB();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static("../../dist"));

server.get("/", function homePage(req, res) {
  res.status(200).sendFile(path.resolve(__dirname, "dist/index.html"));
});

server.listen(process.env.PORT, function startServer() {
  console.log(`server is listening on port ${process.env.PORT}`);
});
