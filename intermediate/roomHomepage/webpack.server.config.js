const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
// moved to frontend config
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    server: "./backend/server/server.js",
  },
  module: {
    rules: [
      {
        //   this is node we wont use jsx here. we will use jsx in frontend
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // moved to frontend config file
      //   {
      //     test: /\.css$/,
      //     use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      //   },
      //   { test: /\.(png|svg|jpg|gif)$/i, type: "asset/resource" },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]-bundle.js",
    publicPath: "/",
  },
  // moved to frontend config file
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: "frontend/src/index.html",
  //       excludeChunks: ["server"],
  //     }),
  //   ],
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
};
