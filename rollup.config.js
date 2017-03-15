import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const config = {
  moduleName: 'ReactStrap',
  entry: 'src/index.js',
  exports: 'named',
  plugins: [
    nodeResolve({}),
    commonjs(),
    babel(),
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
    { dest: 'lib/reactstrap.cjs.js', format: 'cjs' },
    { dest: 'lib/reactstrap.umd.js', format: 'umd' },
    { dest: 'lib/reactstrap.es.js', format: 'es' },
  ],
};

export default config;
