// const express = require("express");
const express = require("express");
const path = require("path");
const webpack = require("webpack");
/**
 * using import in express giving errors
 * **/
// import express from "express";
// import path from "path";
// import webpack from "webpack";
// we will serve the html file in dist in the backend. Which is created by webpack/htmlwebpackplugin, it will inject a script tag with the filename
// we specify in webpack.config.js in the output property of the obj assigned to module.exports
// we want to serve the html that webpack will bundle for us.
// use cors npm package if we plan to make ajax calls to access resouces from remote hosts.
// cors allow us to make the correct connections in our express server

const config = require("../webpack.config.js");
const complier = webpack(config);
// setup dev middleware and hot middleware here

// dev middleware

const webpackDevMiddleware = require("webpack-dev-middleware")(complier);

// hot middleware

const webpackHotMiddleware = require("webpack-hot-middleware")(complier);

// static middleware

const staticMiddleware = express.static("../dist");

const server = express();

// tell express to use our middlewares

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleware);

/**
 * we want to serve our bundle index which will have our js file injected to it here
 * **/

// dev middleware top
// hot middleware middle
// static middleware bottom

// module.exports = {
//   server,
// };
console.log(process.env.PORT);
// export default server;

server.get("/", function initialPage(req, res) {
  res.status(200).sendFile(path.resolve(__dirname, "dist/index.html"));
});

server.listen(process.env.PORT, function runServer() {
  console.log(`server is listening on port ${process.env.PORT}`);
});

/**
 * moved algorithm below to index.js in backend dir
 * **/

// app.listen(port, function listenOnPort() {
//   console.log(`App listening on port: ${port}`);
// });
