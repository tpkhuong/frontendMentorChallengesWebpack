const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?reload=true",
    path.join(__dirname, "frontned/main.js"),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(js|jsx)/,
        excludes: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]-bundle.js",
    publicPath: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "frontend/src/index.html" }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: "development",
  devtool: "eval-source-map",
};

/**
 * use nodemon demo.pde to run nodemon.json file
 * **/
