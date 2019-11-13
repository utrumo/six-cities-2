'use strict';
const {join} = require(`path`);

module.exports = {
  entry: `./src/index.jsx`,
  output: {
    filename: `bundle.js`,
    path: join(__dirname, `public`)
  },
  devServer: {
    contentBase: join(__dirname, `public`),
    compress: false,
    open: true,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      }
    ]
  },
  devtool: `source-map`
};
