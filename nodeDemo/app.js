var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
    res.send('hello world'); //发送一个请求
})
app.get('/getList', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.send({
      title: '请求接口返回数据',
      name: 'getList',
      data: [
          {id: 1, name: 'zhangsan', age: 10, address: '湖北省武汉市XXX'},
          {id: 2, name: 'lisi', age: 12, address: '湖北省荆门市XXX'},
          {id: 3, name: 'wanger', age: 32, address: '湖北省黄冈市XXX'},
          {id: 4, name: 'liuji', age: 22, address: '湖北省武汉市XXX'},
          {id: 5, name: 'hebin', age: 43, address: '湖北省天门市XXX'},
          {id: 6, name: 'wuhang', age: 23, address: '湖北省武汉市XXX'},
          {id: 7, name: 'duhu', age: 66, address: '湖北省鄂州市XXX'},
      ]
  }); //发送一个请求
})
 
app.listen(5000, function () { //在5000端口启动
  console.log('Example app listening on port 5000');
})