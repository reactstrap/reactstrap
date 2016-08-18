var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  context: path.join(__dirname, './src'),
  devtool: 'eval',
  entry: {
    reactstrap: ['./index.js']
  },
  node: {
    fs: 'empty'
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
    alias: {
      reactstrap: path.resolve('./src/index.js')
    },
    extensions: ['', '.js', '.jsx', '.json']
  },
};

webpackConfig.webpackServer = {
  noInfo: true
};
webpackConfig.externals = {};
webpackConfig.externals['react/lib/ExecutionEnvironment'] = true;
webpackConfig.externals['react/lib/ReactContext'] = true;
webpackConfig.externals['react/addons'] = true;

module.exports = webpackConfig;
