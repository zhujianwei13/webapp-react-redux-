/**
 * Created by Administrator on 2018/1/30.
 */

const path=require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { WebPlugin, AutoWebPlugin } = require('web-webpack-plugin');
module.exports={
    entry:{
        index:"./app/index.js"
    }    ,

    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"dist"),
       publicPath:"/"
    }    ,

    resolve:{
        extensions:[".js","jsx"],
        modules:[path.resolve(__dirname,"node_modules")]
    }  ,

    module:{
        loaders:[
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' ,options: {
                'presets': ["es2015","react"],
            }},
            {test: /\.(eot|woff|ttf|svg)$/, loader: "file-loader" }  ,
            { test: /\.css$/, exclude: /node_modules/, loader:["style-loader","css-loader"] },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
        ]
    }

    ,
    plugins:[
        new ExtractTextPlugin({
            filename:`[name]_[contenthash:8].css`
        })   ,
        new WebPlugin({
            filename:"index.html" ,
            template:path.resolve(__dirname,"index-temp.html")
        })
    ]      ,


    devServer:{
        open:true,
        port:81,
      //  hot:true
    }
            ,
    target:"web",
    devtool:"source map" ,
    watch:true,
    watchOptions:{
        ignored:"node_modules",
        aggregateTimeout:300,
        poll:1000
    }
}
