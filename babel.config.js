module.exports = {
  targets: { edge: 13 },
  presets: [
    ['@babel/preset-env', { modules: 'commonjs' }],
    ['@babel/preset-react', { runtime: 'classic' }],
  ],
};
