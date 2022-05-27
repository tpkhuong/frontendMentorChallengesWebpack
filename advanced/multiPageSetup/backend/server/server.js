const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// serve static app.use(express.static(path))

const messageContent = "Hello";

app.get("/", (req, res) => {
  res.status(200).json({ message: messageContent });
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`listening on port ${process.env.PORT}`);
});
