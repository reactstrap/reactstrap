var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, './lib'),
  devtool: 'source-map',
  devServer: {
    contentBase: './example',
    publicPath: '/assets/',
    stats: {
      chunks: false
    }
  },
  entry: {
    app: ['./index.js'],
    example: ['../example/js/app.jsx']
  },
  node: {
    fs: 'empty'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].min.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(json)$/,
        exclude: /node_modules/,
        loaders: [
          'json-loader?cacheDirectory'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?cacheDirectory'
        ]
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./')
    ]
  },
};
