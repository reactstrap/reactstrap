var webpackConfig = require('./webpack.test.config.js');

module.exports = function (config) {
  var configuration = {
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],
    basePath: '',
    browsers: ['PhantomJS'],
    customLaunchers: {
      TRAVIS_CHROME: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      { pattern: './test/*.spec.js', watched: false, included: true, served: true }
    ],
    preprocessors: {
      './test/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackServer: { noInfo: true },
    reporters: ['spec'],

    coverageReporter: {
      dir: 'test/coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary' }
      ]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  };

  configuration.captureTimeout = 2000;
  configuration.browserDisconnectTimeout = 2000;
  configuration.browserDisconnectTolerance = 3;
  configuration.browserNoActivityTimeout = 60000;

  if (process.env.TRAVIS) {
    configuration.browsers = ['PhantomJS'];
  }

  config.set(configuration);
};
