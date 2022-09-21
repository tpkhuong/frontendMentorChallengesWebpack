const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.html$/, use: { loader: "html-loader" } },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      { test: /\.(js|jsx)$/, use: { loader: "babel-loader" } },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset/resource",
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: { loader: "file-loader" },
      // },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[bundle].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
  mode: "development",
};
