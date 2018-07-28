const webpack = require("webpack");
const path = require("path"); // default nodejs library that allows us to resolve the path of my app

// directory where we will copy our transpiled code
const DIST_DIR = path.resolve(__dirname, "dist");
// tell webpack where to find the source of the transpiled code
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "env", "stage-2"]
        }
      }
    ]
  }
};

module.exports = config;
