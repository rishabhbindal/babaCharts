const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  context: __dirname,
  entry: {
    selfTrialBundle: ['../src/components/babaChartsApp.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '..'),
    filename: 'dist/js/[name]-[hash].js',
    publicPath: '',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      }, {
        test: /\.scss?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            }, 
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }],
        }),
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { sourceMap: true }
          }],
        }),
      }, {
        test: /\.(png|jpg|svg)$/,
        use: 'url-loader?name=[path][name].[ext]',
      }, {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader?name=[path][name].[ext]'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?name=[path][name].[ext]'
      }, {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader?name=[path][name].[ext]'
      },
    ],
  },
  devtool: 'eval',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
       // this assumes your vendor imports exist in the node_modules directory
       return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    // CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({ 
      name: 'manifest' // But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../template_samples/babaCharts_sample.html',
      inject: 'body',
      chunks: ['selfTrialBundle', 'vendor', 'manifest'],
    }),

    new ExtractTextPlugin({
        filename: 'dist/css/[name]-[chunkhash].css',
        allChunks: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  watchOptions: {
    poll: true
  },
}
module.exports = config;
