const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./public'),
    filename: 'movezen.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000
  }
};