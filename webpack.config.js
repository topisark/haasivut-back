const slsw = require('serverless-webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: slsw.lib.entries,
  target: 'node',
  externals: [{'aws-sdk': 'commonjs aws-sdk'}],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false
        },
      })
    ],
  }
}