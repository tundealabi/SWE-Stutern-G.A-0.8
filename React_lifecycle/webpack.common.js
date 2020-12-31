module.exports = {
    entry: './src',
    output: {
        filename: '[name]-[contenthash].bundle.js',
        path:__dirname + "/build"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react',
                        {'plugins':['@babel/plugin-proposal-class-properties','@babel/plugin-transform-runtime']}]
                }
            }
            }
        ]
    }
}