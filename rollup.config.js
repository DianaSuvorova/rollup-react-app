// @flow
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styletron-react-core': 'StyletronReactCore',
      },
      sourcemap: 'inline',
    },
  ],
  external: ['react', 'react-dom', 'styletron-react-core'],
  plugins: [
    progress(),
    nodeResolve({
      browser: true,
    }),
    json(),
    babel({
      babelrc: false,
      presets: [['es2015', { modules: false }], 'stage-1', 'react'],
      plugins: ['external-helpers'],
      exclude: 'node_modules/**',
    }),
    visualizer(),
    filesize(),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
