const express = require("express");
// we will serve the html file in dist in the backend. Which is created by webpack/htmlwebpackplugin, it will inject a script tag with the filename
// we specify in webpack.config.js in the output property of the obj assigned to module.exports
// we want to serve the html that webpack will bundle for us.
const app = express();
const port = 3000;

app.get("/", function initialPage(req, res) {
  res.status(200).send("Hello World!!!");
});

app.listen(port, function listenOnPort() {
  console.log(`App listening on port: ${port}`);
});
