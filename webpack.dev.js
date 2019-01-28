const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',

    entry: [path.resolve(__dirname, 'web/index.js'), path.resolve(__dirname, 'web/index.scss')],
    devServer: {
        contentBase: __dirname + './web/index.html',
        port: 3000,
    },
    resolve: {
        modules: [path.resolve(__dirname, "web"), "node_modules"],
        extensions: ['.js', '.jsx', '.scss', '.css', '.sass']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'web')],
                loader: 'babel-loader',
                options: {
                    plugins: ['syntax-dynamic-import'],
                    presets: [
                        // '@babel/preset-react',
                        // '@babel/preset-env'
                        // , 'es2015',
                        // 'env'
                    ]
                },

                test: /\.(js|jsx)$/
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    }, {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }, {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }]
            },
            {
                test: /\.(jpg|png)$/,
                loaders: 'url-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: './web/index.html'}),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        })
    ],
    output: {
        chunkFilename: '[name].[chunkhash].js',
        filename: '[name].[chunkhash].js'
    },


    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    }
};
