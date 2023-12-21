const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require("terser-webpack-plugin")


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const ASSET_PATH = process.env.ASSET_PATH || '/';

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
        {
            loader:'css-loader',
            options: {
                modules: {
                    // localIdentName: "[name]__[local]--[hash:base64:5]",
                    localIdentName: "[local]",
                },
            },
        }

    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

module.exports = {
    entry: {main:'./src/main.jsx'},
    output:{
        filename: filename('js'),
        // filename: 'bundle.js',
        path: path.resolve(__dirname,"build/"),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '...'],
    },
    optimization : optimization(),
    // devtool: isDev ? 'source-map' : 'eval',
    // optimization: optimization(),
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
                to: path.resolve(__dirname, 'build/assets')}]
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename:filename('css')})
    ],
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'src'),
        // },
        static: path.resolve(__dirname, 'src'),
        compress: true,
        port: 8080,
        open: true,
        // historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader'),
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader'),

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
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript'
                    ]
                  }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
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
