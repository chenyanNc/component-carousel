var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV


module.exports = {
  entry: NODE_ENV === 'development' ? './src/main.js' : './src/libs/jscy-ui/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'component-carousel.js',
    library: 'component-carousel', // 指定 require 引用的模块名
    libraryTarget: 'umd', // 指定输出格式
    umdNamedDefine: true, // 会对 umd 放入构建过程的 amd 模块进行命名. 否则使用匿名的 define
  }
}

if(process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
} else {
  module.exports.devtool = '#eval-source-map'
}

