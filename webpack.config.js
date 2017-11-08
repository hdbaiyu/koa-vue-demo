'use strict'
const path = require('path');

const webpack = require('webpack');

// var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var nodeModulesPath = path.join(__dirname, '/node_modules/')
// var hotMiddleWareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'

console.log('Use development webpack config ...')
new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(true),
    VERSION: JSON.stringify("5fa3b9"),
    BROWSER_SUPPORTS_HTML5: true,
    TWO: "1+1",
    "typeof window": JSON.stringify("object")
})
module.exports = {
    /* 输入文件 */
    entry: {
        main: './src/entry/main.js'
    },
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, './dist'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/dist/',
        /* 文件名 */
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },
    module: {
        rules: [
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            },
            { 
                test: /\\\\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // new webpack.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
     //   new webpack.NoErrorsPlugin(),
       new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      })
    ]
}
