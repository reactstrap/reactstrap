var webpackConfig = require('./webpack.config.js');

webpackConfig.devtool = 'cheap-module-source-map';
webpackConfig.module.preLoaders = webpackConfig.module.preLoaders || [];
webpackConfig.module.preLoaders.push({
  test: /\.jsx?$/,
  exclude: /(test|node_modules)\//,
  loader: 'isparta'
});
webpackConfig.webpackServer = {
  noInfo: true
};
webpackConfig.externals = {};
webpackConfig.externals['react/lib/ExecutionEnvironment'] = true;
webpackConfig.externals['react/lib/ReactContext'] = true;

module.exports = webpackConfig;
