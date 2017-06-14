const path = require('path');
const {
  addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, defineConstants, webpack,
  customConfig,
} = require('@webpack-blocks/webpack2');
const devServer = require('@webpack-blocks/dev-server2');
const typescript = require('@webpack-blocks/typescript');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();
const { NODE_ENV, PUSHER_AUTH_ENDPOINT, PUSHER_KEY } = process.env;
const outputPath = path.resolve(__dirname, 'dist');
const publicPath = '/';
const output = (filename) => setOutput({
  filename,
  path: outputPath,
  publicPath,  
});

const constants = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(NODE_ENV),
    PUSHER_AUTH_ENDPOINT: JSON.stringify(PUSHER_AUTH_ENDPOINT),
    PUSHER_KEY: JSON.stringify(PUSHER_KEY),
  },
});

const html = new HtmlWebpackPlugin({
  filename: 'index.html',
  title: 'pusher-app-client',
  mobile: true,
});

const config = createConfig([
  typescript(),
  addPlugins([
    html,
    constants,
  ]),
  env('development', [
    entryPoint({
      bundle: './src/index',
    }),
    output('[name].js'),
    sourceMaps('inline-source-map'),
    addPlugins([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ]),
    devServer.reactHot(),
  ]),
  env('production', [
    output('[name].[chunkHash].js'),
    sourceMaps('hidden-source-map'),
    addPlugins([
      new WebpackMd5Hash(),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, drop_console: true } }),
    ]),
  ]),
]);

module.exports = config;