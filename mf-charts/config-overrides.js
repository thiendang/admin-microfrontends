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
        "./chart-one": "./src/chart-one.tsx",
        "./chart-two": "./src/chart-two.tsx",
        "./chart-three": "./src/chart-three.tsx",
        "./chart-four": "./src/chart-four.tsx",
        "./chart-five": "./src/chart-five.tsx",
        "./chart-six": "./src/chart-six.tsx",
        "./chart-seven": "./src/chart-seven.tsx",
        "./chart-eight": "./src/chart-eight.tsx",
        "./chart-nine": "./src/chart-nine.tsx",
        "./chart-ten": "./src/chart-ten.tsx",
        "./main": "./src/main.tsx",
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
  const shellScriptPlugin = new HookShellScriptPlugin({
    beforeCompile: ['npm run create:manifest'],
  });
  shellScriptPlugin._onScriptError = () => {};
  config.plugins.push(
    shellScriptPlugin
  );

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
