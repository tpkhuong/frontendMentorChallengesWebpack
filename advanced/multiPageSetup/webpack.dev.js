const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./frontend/src/main.js",
    project: "./frontend/src/projects.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      { test: /\.(png|svg|jpg|gif)$/i, type: "asset/resource" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/src/index.html",
      //   chunks: ["index"],
      // the value in the array excludeChunks has to match the property name in entry obj
      // using excludeChunks because we dont want webpack to inject both js file <script> in entry property of this config to index.html file
      excludeChunks: ["project"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./frontend/src/projects.html",
      // the value in the array chunks has to match the property name in entry obj
      // using chunks to tell webpack to inject the js file assign to project property of the entry property of this config
      // which is "./frontend/src/projects.js" assigned to "project"
      chunks: ["project"],
      filename: "projects.html",
    }),
  ],
  // to use script webpack serve we need a src folder in the root directory of our app
  devServer: {
    // add config below, our changes to files in ./frontend/src dir will reload our app
    static: {
      directory: path.join(__dirname, "./frontend/src"),
      watch: true,
    },
  },
  mode: "development",
};
