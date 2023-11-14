const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require("terser-webpack-plugin")


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

// const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
const filename = ext => isDev ? `[name].${ext}` : `[name].${ext}`


const optimization = () => {
    const config = {
        splitChunks:
            {
            chunks: 'all'
            }
    }

    if (isProd){
        config.minimizer = [
            // new TerserWebpackPlugin(),
            `...`,
            new CssMinimizerPlugin()            
        ]
    }
    return config                  
}

const cssLoaders = extra => {
    const loaders = [
        MiniCssExtractPlugin.loader,
        'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

module.exports = {
    entry: {main:'./src/main.js'},
    output:{
        filename: filename('js'),
        path: path.resolve(__dirname,"build"),
    },
    optimization : optimization(),
    // devtool: isDev ? 'source-map' : '',
    optimization: optimization(),
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify:{
                collapseWhitespace:isProd
            }
        }),
        new CopyPlugin({
            patterns: [{
                from : path.resolve(__dirname, 'src/assets') , 
                to: path.resolve(__dirname, 'build/assets')}] //[{ from : "public"}]
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename:filename('css')})
    ],  
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 8080,
        open: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                  filename: `assets/[name][ext]`
                }
            },
        ]
    }
};