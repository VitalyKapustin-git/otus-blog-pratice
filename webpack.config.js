const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'assets/[name].[hash].[ext]',
  },
  module: {
    rules: [
      { 
        test: /\.(jpg|png|ttf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "ingenuity-news.html",
      template: "./src/ingenuity-news.html",
    }),
    new HtmlWebpackPlugin({
      filename: "join.html",
      template: "./src/join.html",
    }),
    new HtmlWebpackPlugin({
      filename: "news.html",
      template: "./src/news.html",
    }),
    new StylelintPlugin(),
  ],
};
