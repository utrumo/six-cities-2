'use strict';
const {join} = require(`path`);
const SRC = join(__dirname, `src`);
const PUBLIC = join(__dirname, `public`);

module.exports = {
  context: SRC,
  resolve: {
    extensions: [`.jsx`, `.js`],
    modules: [
      SRC,
      `node_modules`,
    ],
    alias: {
      '@ui': join(__dirname, `src/components/ui`),
    },
  },
  entry: `index.jsx`,
  output: {
    filename: `bundle.js`,
    path: PUBLIC,
  },
  devServer: {
    contentBase: PUBLIC,
    compress: false,
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.css$/,
        use: [
          `style-loader`,
          `css-loader`,
        ],
      },
      {
        test: /\.png$/,
        use: [
          `file-loader`,
        ],
      },
    ],
  },
  devtool: `source-map`,
};
