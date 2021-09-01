const path = require('path');

module.exports = async ({ config }) => {
  config.resolve = {
    alias: {
      reactstrap: path.resolve(__dirname, '../src/')
    },
  };

  return config;
};
