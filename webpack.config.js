const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'web/index.js'),
    //区別しやすいようにdistディレクトリ配下に
    //ビルドした後に生成されるjsファイル名をbundleに
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, "web"), "node_modules"],
        extensions: ['.js', '.jsx', '.scss', '.css', '.sass']
    },
    module: {
        //ここがloadersだとビルドの際エラー吐きます.
        //いろんなサイトでloadersと書かれています.
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
            // {
            //     test: /\.(sa|sc|c)ss$/,
            //     use: [
            //         devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'postcss-loader',
            //         'sass-loader',
            //     ],
            // },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // {
                    //     loader: 'style-loader', // inject CSS to page
                    // },
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
    //これがないと先ほど作成したHTMLと
    //app.jsがバインドされません
    plugins: [
        new HtmlWebpackPlugin({template: './web/index.html'}),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        })
    ]
};