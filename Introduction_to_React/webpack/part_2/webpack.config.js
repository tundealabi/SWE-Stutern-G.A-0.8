const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'none',
    entry: './',
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
    output: {
        filename: '[name]-[contenthash].bundle.js',
        path: __dirname + 'public'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
          }
        ]
    }
}