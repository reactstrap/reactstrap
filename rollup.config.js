import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import replace from 'rollup-plugin-replace';
// Require understands JSON files.
const packageJson = require('./package.json');

const peerDependencies = Object.keys(packageJson.peerDependencies);
const dependencies = Object.keys(packageJson.dependencies);
dependencies.push('react-transition-group/Transition');

function globals() {
  return {
    react: 'React',
    'react-dom': 'ReactDOM',
  };
}

function baseConfig() {
  return {
    input: 'src/index.js',
    plugins: [
      nodeResolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              loose: true,
              shippedProposals: true,
              modules: false,
              targets: {
                ie: 9
              }
            }
          ],
          '@babel/react'
        ],
        plugins: ['@babel/plugin-proposal-export-default-from', '@babel/plugin-proposal-export-namespace-from']
      }),
    ]
  };
}

function baseUmdConfig(minified) {
  const config = Object.assign(baseConfig(), {
    external: peerDependencies,
  });
  config.plugins.push(replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }));

  if (minified) {
    config.plugins.push(minify({ comments: false }));
  }

  return config;
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
libConfig.output = [
  { sourcemap: true, name: 'Reactstrap', file: 'dist/reactstrap.cjs.js', format: 'cjs' },
  { sourcemap: true, name: 'Reactstrap', file: 'dist/reactstrap.es.js', format: 'es' },
];

/*
  UMD CONFIG
  ----------

  Goal of this configuration is to be directly included on web pages.
  This configuration is minimized and will include dependencies that are not
  marked as peer dependencies. ** See below

  Defining this config will also check that all peer dependencies are set up
  correctly in the globals input.

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
const umdFullConfig = baseUmdConfig(false);
umdFullConfig.output = [
  { globals: globals(), sourcemap: true, name: 'Reactstrap', file: 'dist/reactstrap.full.js', format: 'umd' },
];

// Validate globals in main UMD config
const missingGlobals = peerDependencies.filter(dep => !(dep in globals()));
if (missingGlobals.length) {
  console.error('All peer dependencies need to be mentioned in globals, please update rollup.config.js.');
  console.error('Missing: ' + missingGlobals.join(', '));
  console.error('Aborting build.');
  process.exit(1);
}

const umdFullConfigMin = baseUmdConfig(true);
umdFullConfigMin.output = [
  { globals: globals(), sourcemap: true, name: 'Reactstrap', file: 'dist/reactstrap.full.min.js', format: 'umd' },
];

const external = umdFullConfig.external.slice();
external.push('react-transition-group/Transition');
external.push('react-popper');

const allGlobals = Object.assign({}, globals(), {
  'react-popper': 'ReactPopper',
  'react-transition-group/Transition': 'ReactTransitionGroup.Transition',
});

const umdConfig = baseUmdConfig(false);
umdConfig.external = external;
umdConfig.output = [
  { globals: allGlobals, sourcemap: true, name: 'Reactstrap', file: 'dist/reactstrap.js', format: 'umd' },
];

const umdConfigMin = baseUmdConfig(true);
umdConfigMin.external = external;
umdConfigMin.output = [
  { globals: allGlobals, sourcemap: true, name: 'Reactstrap', file: 'dist/reactstrap.min.js', format: 'umd' },
];


export default [
  libConfig,
  umdFullConfig,
  umdFullConfigMin,
  umdConfig,
  umdConfigMin,
];
