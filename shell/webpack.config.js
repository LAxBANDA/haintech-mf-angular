const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const federatedPlugin = new ModuleFederationPlugin({
  remotes: {},
  shared: {
    '@angular/core': { eager: true, singleton: true },
    '@angular/common': { eager: true, singleton: true },
    '@angular/router': { eager: true, singleton: true },
    '@ngxs/store': { singleton: true, eager: true },
    'mdmf-shared': { singleton: true, eager: true },
  },
});

console.log({federatedPlugin})

module.exports = {
  output: {
    publicPath: 'http://localhost:4200/',
    uniqueName: 'shell',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    federatedPlugin
  ],
};
