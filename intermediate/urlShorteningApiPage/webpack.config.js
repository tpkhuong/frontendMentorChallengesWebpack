const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./frontend/src/main.js",
  module: {
    rules: [
      { test: /\.html$/, use: { loader: "html-loader" } },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["react-refresh/babel"],
          },
        },
      },
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
    filename: "[name].bundle.js",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./frontend/src/index.html",
    }),
    new Dotenv(),
    new ReactRefreshWebpackPlugin(),
  ],
};
