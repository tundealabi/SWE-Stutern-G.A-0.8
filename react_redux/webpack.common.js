const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: './src',
    output: {
        filename: '[name]-[contenthash].bundle.js',
        path:__dirname + "/build"
    },
    plugins: [new CleanWebpackPlugin(),],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react',
                        {'plugins':['@babel/plugin-proposal-class-properties']}]
                }
            }
            }
        ]
    }
}