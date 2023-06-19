module.exports = api => {
  const isTest = api.env('test');
  // TODO: Maybe use babel-preset env with browser targets and get rid of plugins
  return {
    "presets": isTest
      ? [['@babel/preset-env', {targets: {node: 'current'}}], "@babel/preset-react"]
      : ["@babel/preset-react"],
    "plugins": [
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-object-rest-spread"
    ]
  };
};
