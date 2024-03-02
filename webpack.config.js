const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'out.js'
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 4200
    },

    // this is to load css
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html'
        })
    ]
}