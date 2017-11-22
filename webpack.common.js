const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry :'./src/index.js',
    output : {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build')
    },
    module : {
        rules: [
            { 
                test: /\.js$/, 
                use: 'babel-loader',
                exclude: /node_modules/
            },
            { 
                test: /\.jsx$/, 
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html',
                inject: 'body'
        })
    ]
};