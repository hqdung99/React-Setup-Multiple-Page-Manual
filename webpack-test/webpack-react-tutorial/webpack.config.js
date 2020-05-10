const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
    contact: "./src/contact.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "./index.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/about.html",
      inject: true,
      chunks: ["about"],
      filename: "./about.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/contact.html",
      inject: true,
      chunks: ["contact"],
      filename: "./contact.html",
    }),
  ],
};
