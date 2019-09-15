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
                test: /\.s?css$/,
                exclude: "/node_modules/",
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]"
                    "style-loader", // Injects style into DOM
                    "css-loader", // Turns CSS into JS
                    "sass-loader" // Turns SCSS into CSS
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
