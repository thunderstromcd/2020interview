const path = require('path')
const express = require('express')
// gzip 配置
const compression = require('compression')
var history = require('connect-history-api-fallback');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);//使用socket.io

app.use(compression())//使用gzip
app.use(function(req, res, next) {//解决跨域
    // console.log('headers',req.headers)
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    next()
})
app.use(history())//解决路由的history模式
app.use(express.static(path.join(__dirname, './dist')))
// app.listen(80)// 使用socket.io后,不能使用下面语句了
server.listen(80)
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('update', function (data) {
    //通知所用用户更新版本
    io.emit('update', { });
  })
});
console.log('服务器已经运行')