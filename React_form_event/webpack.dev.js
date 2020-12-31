const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig,{
    mode: 'development',
    plugins:[new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options:{
                        modules:true
                    }
                }]
            }
        ]
    },
    devServer: {
        port: 8080,
        contentBase: __dirname+'/build/',
        hot: true
    }
})