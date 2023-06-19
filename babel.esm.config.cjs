module.exports = {
  extends: './babel.config.cjs',
  presets: [
    // Dont transform modules for the esm build
    ['@babel/preset-env', { modules: false }],
  ],
};
