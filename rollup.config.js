import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import babili from 'rollup-plugin-babili';

const config = {
  moduleName: 'ReactStrap',
  entry: 'src/index.js',
  exports: 'named',
  plugins: [
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
    { dest: 'dist/reactstrap.es.js', format: 'es' },
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(babili({ comments: false }));
}

export default config;
