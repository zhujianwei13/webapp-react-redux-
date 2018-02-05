/**
 * Created by Administrator on 2018/1/31.
 */


const express=require("express");
const app=express();
const path=require("path")

var fs=require('fs');
app.use(express.static('public'));
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    console.log("支持跨域")
    next();
});

app.get('/', function(req, res){
    res.end('hello world 朱建伟');
  //  res.sendFile("./public/category.json")
});

app.get('/catedata', function(req, res){
//    res.end('hello world 朱建伟');
    //const path=           "Accept":"application/json,text/plain"
  //  res.header('Accept', 'application/json,text/plain')
//  res.end("data is hzujianw ")
    const cdata=null;
    let data=fs.readFileSync(path.resolve(__dirname,"public/category.json"),"utf-8");
    data=JSON.stringify(data.toString())
    console.log("开始执行data",data)
    res.end(data)
});

app.listen(82,function(){
    console.log("开始执行node")
});
