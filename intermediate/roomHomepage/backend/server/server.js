const express = require("express");
const path = require("path");
const devServer = require("./devServer");
// const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const webpackHotMiddleware = require("webpack-hot-middleware");
// const config = require("../../webpack.config.client.dev");
require("dotenv").config();

const app = express();

const DIST_DIR = path.join(__dirname, "../../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

// function compile(app) {
//     if (process.env.NODE_ENV == "development") {
//         const compiler = webpack(config);
//         const middleware = webpackDevMiddleware(compiler, {
//             publicPath: config.output.publicPath
//         })
//         app.use(middleware);
//         app.use(webpackHotMiddleware(compiler));
//     }
// }

devServer.compile(app);

// dev middleware
// hot middleware
// use static file

// app.get("/", function initial(req, res) {
//   res.status(200).send("Hello World");
// });

app.use("/", express.static(DIST_DIR));

app.get("/", function entryPoint(req, res) {
  res.status(200).sendFile(HTML_FILE);
});

app.listen(process.env.PORT, function startServer(req, res) {
  console.log(`Listening on port ${process.env.PORT}`);
});
