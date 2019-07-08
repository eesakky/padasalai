const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./index.js",
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

                loader:
                    "style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]"
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
        })
    ],
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        hot: true,
        historyApiFallback: true
    }
};
