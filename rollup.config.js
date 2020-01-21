import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';

export default [
	{
		input: pkg.source,
		output: {
			name: 'sidebar',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
      commonjs(),
      typescript({ lib: ["es5", "es6", "dom"], target: "es5" })
		]
	},
	{
		input: pkg.source,
		output: [
			{ 
        file: pkg.main, format: 'cjs'
      },
			{ 
        file: pkg.module, format: 'es'
      }
    ],
    plugins: [
			resolve(),
      typescript({ lib: ["es5", "es6", "dom"], target: "es5" })
    ]
	}
];