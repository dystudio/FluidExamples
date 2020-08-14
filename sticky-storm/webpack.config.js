const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
    return ({
        entry: {
            app: "./src/index.tsx"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    //MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }]
        },
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, "dist"),
            library: "[name]",
            // https://github.com/webpack/webpack/issues/5767
            // https://github.com/webpack/webpack/issues/7939
            devtoolNamespace: "@fluid-example/sticky-storm",
            libraryTarget: "umd"
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                chunks: ["app"],
            }),
        ],
        mode: "development",
        devtool: "inline-source-map"
    });
};
