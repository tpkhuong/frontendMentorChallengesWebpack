const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "backend/server/server.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server-bundle.js",
    publicPath: "/dist/",
    libraryTarget: "commonjs2",
  },
  target: "node",
  externals: [nodeExternals()],
};
