import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import babili from 'rollup-plugin-babili';
import replace from 'rollup-plugin-replace';

// Require understands JSON files.
const packageJson = require('./package.json');
const peerDependencies = Object.keys(packageJson.peerDependencies);
const dependencies = Object.keys(packageJson.dependencies);

function baseConfig() {
  return {
    moduleName: 'Reactstrap',
    entry: 'src/index.js',
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        plugins: ['external-helpers'],
      }),
    ],
    sourceMap: true,
  };
}

/*
  COMMONJS / MODULE CONFIG
  ------------------------

  Goal of this configuration is to generate bundles to be consumed by bundlers.
  This configuration is not minimized and will import all dependencies.
*/
const libConfig = baseConfig();
// Do not include any of the dependencies
libConfig.external = peerDependencies.concat(dependencies);
libConfig.targets = [
  { dest: 'dist/reactstrap.cjs.js', format: 'cjs' },
  { dest: 'dist/reactstrap.es.js', format: 'es' },
];

/*
  UMD CONFIG
  ----------

  Goal of this configuration is to be directly included on web pages.
  This configuration is minimized and will include dependencies that are not
  marked as peer dependencies.

  Defining this config will also check that all peer dependencies are set up
  correctly in the globals entry.
*/
const umdConfig = baseConfig();
umdConfig.external = peerDependencies;
umdConfig.plugins.push(replace({
  'process.env.NODE_ENV': JSON.stringify('production'),
}));
umdConfig.plugins.push(babili({ comments: false }));
umdConfig.targets = [
  { dest: 'dist/reactstrap.min.js', format: 'umd' },
];
umdConfig.globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
const missingGlobals = peerDependencies.filter(dep => !(dep in umdConfig.globals));
if (missingGlobals.length) {
  console.error('All peer dependencies need to be mentioned in globals, please update rollup.config.js.');
  console.error('Missing: ' + missingGlobals.join(', '));
  console.error('Aborting build.');
  process.exit(1);
}

export default [
  libConfig,
  umdConfig,
];
