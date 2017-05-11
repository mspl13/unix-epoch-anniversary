const path = require("path");

module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // Sass files
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // Creates style nodes from JS strings
          }, {
            loader: "css-loader" // Translates CSS into CommonJS
          }, {
            loader: "sass-loader" // Compiles Sass to CSS
          }
        ]
      },
      // JavaScript Files
      {
        test: /\.js$/,
        use: [
          // Convert to ES2015
          {
            loader: "babel-loader",
            query: {
              presets: ["es2015"]
            }
          }
        ]
      }
    ]
  }
};
