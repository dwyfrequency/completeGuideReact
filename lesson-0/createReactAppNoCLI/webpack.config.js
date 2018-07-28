const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // creates our index.html file and dist dir for us

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"), // __dirname is the current directory
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
