const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                loader: "babel-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=25000"
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
            //​​chunkFilename: "chunk-[id].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        contentBase: "./dist",
        hot: true,
        historyApiFallback: true
    }
};
