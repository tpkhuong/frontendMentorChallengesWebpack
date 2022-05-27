const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "frontend/src/main.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name]-bundle.js",
    publicPath: "/dist",
  },
  mode: "production",
};
