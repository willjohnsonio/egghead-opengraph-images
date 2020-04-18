import babel from "gen-opengraph-images/node_modules/rollup-plugin-babel";
import resolve from "gen-opengraph-images/node_modules/@rollup/plugin-node-resolve";
import commonjs from "gen-opengraph-images/node_modules/@rollup/plugin-commonjs";
import builtins from "gen-opengraph-images/node_modules/rollup-plugin-node-builtins";
import globals from "gen-opengraph-images/node_modules/rollup-plugin-node-globals";
import replace from "gen-opengraph-images/node_modules/@rollup/plugin-replace";
import React from "gen-opengraph-images/node_modules/react";
import ReactDOM from "gen-opengraph-images/node_modules/react-dom";

const config = {
  input: "src/image.js",
  output: [
    {
      file: `image.js`,
      format: "iife"
    }
  ],
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs({
      namedExports: {
        "react-dom": Object.keys(ReactDOM),
        react: Object.keys(React)
      }
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    globals(),
    builtins()
  ]
};

export default config;