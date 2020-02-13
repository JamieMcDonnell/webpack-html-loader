const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const plugins = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "!!html-webpack-plugin/lib/loader.js!./index.html",
    inject: "body",
    title: "DEMO"
  })
];

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins,
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 443,
    https: true
  }
};
