import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';

const config = {
  moduleName: 'ReactStrap',
  entry: 'src/index.js',
  exports: 'named',
  plugins: [
    alias({
      // See https://github.com/HubSpot/tether/pull/240#issuecomment-286926942
      tether: 'node_modules/tether/dist/js/tether.min.js',
    }),
    nodeResolve(),
    commonjs(),
    babel({
      plugins: ['external-helpers'],
    }),
  ],
  external: [
    'react',
    'react-dom',
    'react-addons-css-transition-group',
    'react-addons-transition-group',
  ],
  // Used for the UMD bundles
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-addons-css-transition-group': 'CSSTransitionGroup',
    'react-addons-transition-group': 'TransitionGroup',
  },
  targets: [
    { dest: 'dist/reactstrap.cjs.js', format: 'cjs' },
    { dest: 'dist/reactstrap.umd.js', format: 'umd' },
    { dest: 'dist/reactstrap.es.js', format: 'es' },
  ],
};

export default config;
