const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'assets/[name].[hash].[ext]',
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        include: path.resolve(__dirname, "dist"),
      },
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
      filename: "item1.html",
      template: "./src/item1.html",
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
