const path = require('path');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: /src/,
      }
    ]
  },
  watch: true,
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
}