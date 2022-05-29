const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// import express from "express";
// import path from "path";
// import "dotenv/config";

const app = express();

app.use(cors());

// serve static app.use(express.static(path))

// getting error due to type because of incorrect path
app.use(express.static(path.resolve(__dirname, "../../public")));

const messageContent = "Hello World!!!";

app.get("/projects", function projectPage(req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../../frontend/src/projects.html"));
});

app.get("/", function homePage(req, res) {
  // res.status(200).sendFile(path.join(__dirname, "../../public/index.html"));
  res
    .status(200)
    .sendFile(path.join(__dirname, "../../frontend/src/index.html"));
  /**
   * wanted to serve files in dist folder. webpack output
   * **/
  // res.status(200).sendFile(path.join(__dirname, "../../dist/index.html"));
  // res.status(200).json({ message: messageContent });
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`listening on port ${process.env.PORT}`);
});
