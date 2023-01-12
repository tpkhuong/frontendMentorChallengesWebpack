const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./frontend/src/index.js",
  module: {
    rules: [
      { test: /\.html$/, use: { loader: "html-loader" } },
      { test: /\.(js|jsx)$/, use: { loader: "babel-loader" } },
      {
        test: /.css$/,
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
    new HtmlWebpackPlugin({
      template: "./frontend/src/index.html",
    }),
  ],
  mode: "development",
};
