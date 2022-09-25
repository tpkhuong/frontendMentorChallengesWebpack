const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./frontend/src/main.js",
  module: {
    rules: [
      { test: /\.html$/, use: { loader: "html-loader" } },

      { test: /\.(js|jsx)$/, use: { loader: "babel-loader" } },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[bundle].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/src/index.html",
    }),
    new Dotenv(),
  ],
  mode: "development",
};
