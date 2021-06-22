const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const config = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build')
        },
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    use: ['babel-loader']
                },
                {
                    test: /.s?css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    type: 'asset'
                }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new CopyPlugin({
                patterns: [
                    { from: './src/assets/logo', to: './' },
                    { from: './src/assets/images', to: './' }
                ]
            }),
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                        ['gifsicle', { interlaced: true }],
                        ['jpegtran', { progressive: true }],
                        ['optipng', { optimizationLevel: 5 }],
                        ['svgo', { plugins: [{ removeViewBox: false }] }]
                    ]
                }
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            hot: true,
            port: 8080,
            historyApiFallback: true
        }
    };

    if (isProduction) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: '[name].css'
            })
        );
    }

    return config;
};
