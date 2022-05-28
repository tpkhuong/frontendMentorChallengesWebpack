/**
 * if we use "type":"module" in package.json
 * we have to use import instead of require
 * **/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
// const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "./frontend/src/main.js",
  ],
  module: {
    rules: [
      // without html-loader our img tag will not load img from url in src attr
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      { test: /\.(png|svg|jpg|gif)$/i, type: "asset/resource" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./frontend/src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
    // new Dotenv(),
  ],
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "./frontend/src"),
      watch: true,
    },
  },
};
