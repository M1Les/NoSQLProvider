var path = require("path");
var webpack = require("webpack");

var webpackConfig = {
  entry: "./src/tests/ObjectStoreProvider.spec.ts",

  output: {
    filename: "./ObjectStoreProviderTestsPack.js",
  },

  externals: ["indexeddb-js", "fs"],

  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        // Compile TS.
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
      },
    ],
  },

  mode: "development",
};

module.exports = webpackConfig;
