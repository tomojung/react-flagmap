import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";

const packageJson = require("./package.json");

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
			scss({
				output: "dist/styles.css", // Output compiled CSS file
				sass: require("sass"), // Use Dart Sass for compilation
				sourceMap: true, // Enable source maps for SCSS
			}),
			terser(),
		],
		external: ["react", "react-dom"],
	},
	{
		input: "src/index.ts",
		output: [{ file: "dist/types.d.ts", format: "es" }],
		plugins: [dts.default()],
	},
];
