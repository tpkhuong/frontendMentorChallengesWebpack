const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// algorithm from backend config
// const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    main: "./frontend/src/main.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(js|jsx)/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.(png|svg|jpg|gif)$/i, type: "asset/resource" },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]-bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "frontend/src/index.html",
      excludeChunks: ["server"],
    }),
  ],
  target: "web",
  devtool: "source-map",
  // backend code
  //   node: {
  //     __dirname: false,
  //     __filename: false,
  //   },
  //   externals: [nodeExternals()],
};
