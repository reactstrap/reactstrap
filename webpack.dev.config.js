var path = require('path');
var webpack = require('webpack');

var webpackDevConfig = require('./webpack.base.config')('development');
var webpackProdConfig = require('./webpack.base.config')('production');

var config = [{
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
    example: ['../example/js/app.jsx'],
    demo: ['../example/js/demo.jsx']
  },
  node: {
    fs: 'empty'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(json)$/,
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
    extensions: ['', '.js', '.jsx', '.json'],
    root: [
      path.resolve('./')
    ]
  },
}];

config.push(webpackDevConfig);
config.push(webpackProdConfig);

module.exports = config;
