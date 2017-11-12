const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');

const app = express();

const webpackConfig = require('./webpack.dev.config');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleWare(compiler,{
    publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/alldata',(req,res,next)=>{
    res.json([4235,23,45,23,3]);
})
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'src','index.html'));
});

app.listen(3000,(err)=>{
    if(err)
        return err;
    console.log("server listening to port 3000");
})