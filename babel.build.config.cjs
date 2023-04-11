
module.exports = {
  extends: './babel.config.cjs',
  ignore: [/\.d.ts/, /\.(stories|spec|test)\.(js|ts|jsx|tsx?)$/],
  plugins: ["@babel/plugin-transform-modules-commonjs"]
};