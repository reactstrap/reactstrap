import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import babili from 'rollup-plugin-babili';

const config = {
  entry: 'src/index.js',
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
  targets: [
    { dest: 'dist/reactstrap.cjs.js', format: 'cjs' },
    { dest: 'dist/reactstrap.es.js', format: 'es' },
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(babili({ comments: false }));
}

export default config;
