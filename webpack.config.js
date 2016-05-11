var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            // { test: /\.(png|jpe?g)$/, loader: 'url-loader?limit=8192&name=images/[name].[ext]' }
            { test: /\.(png|jpg)$/, loader: "file-loader?name=img/img-[hash:6].[ext]" }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
};
