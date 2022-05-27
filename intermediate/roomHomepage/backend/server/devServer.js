const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../../webpack.config.client.dev");

function compile(app) {
  if (process.env.NODE_ENV == "development") {
    const compiler = webpack(config);
    const middleware = webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    });
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
  }
}

module.exports = {
  compile,
};
