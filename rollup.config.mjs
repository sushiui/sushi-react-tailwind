// rollup.config.js
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from "./package.json" with { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: false,
      },
      // {
      //   file: pkg.module,
      //   format: "esm",
      //   sourcemap: false,
      // },
      // {
      //   file: "dist/bundle.min.js",
      //   format: "iife",
      //   name: "version",
      //   plugins: [terser()],
      // },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json", sourceMap: false }), postcss(), terser()],
    external: ["react", "react-dom", "tailwindcss"],
  },
  {
    input: "dist/cjs/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "cjs", sourceMap: false }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
