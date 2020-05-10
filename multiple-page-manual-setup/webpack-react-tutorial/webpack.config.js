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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      inject: true,
      chunks: ["index"],
    }),
    new HtmlWebPackPlugin({
      template: "./src/about.html",
      filename: "about.html",
      chunks: ["about"],
      inject: true,
    }),
    new HtmlWebPackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
      chunks: ["contact"],
      inject: true,
    }),
  ],
};
