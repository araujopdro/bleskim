const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");


const project_title = "Vista Cyrela Towermilano"
const folder = project_title.toLowerCase().replaceAll(" ", "-")

// mode: 'development',
module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, `src/${folder}/js/index.js`),
        form: path.resolve(__dirname, `src/${folder}/js/form.js`),
        live: path.resolve(__dirname, `src/${folder}/js/live.js`),
        router: path.resolve(__dirname, `src/${folder}/js/router.js`),
    },
    output: {
        path: path.resolve(__dirname, `deploy/${folder}`),
        filename: 'js/[name].js',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, `deploy/${folder}`)
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude:path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(hdr|jpg|png)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            name: '[name].[ext]',
                            outputPath: 'assets/imgs',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: project_title,
            filename: 'index.html',
            template: `src/${folder}/pages/index.html`,
            inject: true,
            chunks: ["index", "router"],
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            title: project_title,
            filename: 'pages/live.html',
            template: `src/${folder}/pages/live.html`,
            inject: true,
            chunks: ["live"],
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            title: project_title,
            filename: 'pages/form.html',
            template: `src/${folder}/pages/form.html`,
            inject: true,
            chunks: [],
            minify: {
                collapseWhitespace: true
            }
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}