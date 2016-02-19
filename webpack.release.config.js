var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor'],
    minChunks: function (module) {
      return module.resource && module.resource.indexOf('node_modules') >= 0;
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false
    }
  })
];

delete webpackConfig.entry.example;
webpackConfig.devtool = 'source-map';
webpackConfig.module.loaders.concat(plugins);

module.exports = webpackConfig;
