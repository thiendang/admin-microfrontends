/* config-overrides.js */
const path = require("path");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const HookShellScriptPlugin = require('hook-shell-script-webpack-plugin');

const pkg = require("./package.json");
const getVersion = (name) => pkg.dependencies[name] || pkg.peerDependencies[name];

// eslint-disable-next-line
module.exports = function override(config, env) {
  config.output.publicPath = "auto";

  config.target = "web";
  config.entry = ["./src/index.ts"];
  config.plugins.push(
    new ModuleFederationPlugin({
      name: pkg.name,
      filename: "remoteEntry.js",
      exposes: {
        "./table-one": "./src/table-one.tsx",
        "./table-two": "./src/table-two.tsx",
        "./table-three": "./src/table-three.tsx",
        "./table-four": "./src/table-four.tsx",
        "./table-five": "./src/table-five.tsx",
        "./table-six": "./src/table-six.tsx",
        "./main": "./src/main.tsx"
      },
      shared: {
        react: {
          requiredVersion: getVersion("react"),
          import: "react",
          shareKey: "react",
          shareScope: "default",
          singleton: true
        },
        "react-dom": {
          requiredVersion: getVersion("react-dom"),
          singleton: true
        },
        "react-router-dom": {
          requiredVersion: getVersion("react-router-dom"),
          singleton: true
        },
        "react-query": {
          requiredVersion: getVersion("react-query"),
          singleton: true
        }
      }
    })
  );
  // const shellScriptPlugin = new HookShellScriptPlugin({
  //   beforeCompile: ['npm run create:manifest'],
  // });
  // shellScriptPlugin._onScriptError = () => {};
  // config.plugins.push(
  //   shellScriptPlugin
  // );

  config.resolve = {
    fallback: {
      https: false,
      http: false,
      zlib: false,
      fs: false,
      path: false
    }
  };
  return config;
};
