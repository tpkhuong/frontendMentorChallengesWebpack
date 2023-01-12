const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./frontend/src/main.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
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
    path: path.join(__dirname, "dist"),
    filename: "[name]-bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/src/index.html",
    }),
  ],
  mode: "development",
};
