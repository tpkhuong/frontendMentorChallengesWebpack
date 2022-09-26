const express = require("express");
const server = express();
const cors = require("cors");
const path = require("path");
const connectDB = require("../config/database");
const dotenv = require("dotenv").config();

connectDB();

const DIST_DIR = path.join(__dirname, "../../dist");
const html_file = path.join(DIST_DIR, "index.html");

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(DIST_DIR));
server.use("/api/testcalls", require("../routes/index"));

server.get("/api", function homePage(req, res) {
  res.status(200).json({ message: "Hello there" });
});

server.listen(process.env.PORT, function startServer() {
  console.log(`server is listening on port ${process.env.PORT}`);
});
