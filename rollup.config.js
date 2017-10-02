import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
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
  marked as peer dependencies. ** See below

  Defining this config will also check that all peer dependencies are set up
  correctly in the globals entry.

  Reactstrap has two versions:

  1) `reactstrap.min.js`
      This file excludes `react-popper` and `react-transition-group` from
      the dist build where they need to be manually required if any
      application uses components that require these features.

  2) `reactstrap.full.min.js`
      This file includes all dependencies.

  For both versions the peer dependencies are always excluded and must be manually
  included - `react` and `react-dom`.

*/
const umdFullConfig = baseConfig();
umdFullConfig.external = peerDependencies;
umdFullConfig.plugins.push(replace({
  'process.env.NODE_ENV': JSON.stringify('production'),
}));
umdFullConfig.plugins.push(minify({ comments: false }));
umdFullConfig.targets = [
  { dest: 'dist/reactstrap.full.min.js', format: 'umd' },
];
umdFullConfig.globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const missingGlobals = peerDependencies.filter(dep => !(dep in umdFullConfig.globals));
if (missingGlobals.length) {
  console.error('All peer dependencies need to be mentioned in globals, please update rollup.config.js.');
  console.error('Missing: ' + missingGlobals.join(', '));
  console.error('Aborting build.');
  process.exit(1);
}

const external = umdFullConfig.external.slice();
external.push('react-transition-group/Transition');
external.push('react-popper');

const umdConfig = Object.assign({}, umdFullConfig, {
  targets: [
    { dest: 'dist/reactstrap.min.js', format: 'umd' },
  ],
  external: external,
  globals: Object.assign({}, umdFullConfig.globals, {
    'react-popper': 'ReactPopper',
    'react-transition-group/Transition': 'ReactTransitionGroup.Transition',
  })
});


export default [
  libConfig,
  umdFullConfig,
  umdConfig,
];
