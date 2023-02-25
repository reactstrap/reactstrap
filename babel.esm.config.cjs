module.exports = {
  extends: './babel.build.config.cjs',
  presets: [
    // Dont transform modules for the esm build
    ['@babel/preset-env', { modules: false }],
  ],
};