const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const path = require('path')
const badyParser = require('body-parser');
// 引入routes
const routes = require('./routes')
// badyParser解析
// const app = express();没有badyParser功能，app.use(badyParser.json());给app加了badyParser功能
// app.use(badyParser.urlencoded());
app.use(badyParser.json());
app.use(express.static('public'));

// mongoose.Promise = global.Promise;
// 下面两行链接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sleep-write');
// 上一步创建一个库，下一步创建一个集合
// const Cat = mongoose.model('Cat',{username:String});

const db = mongoose.connection;
db.on('error',function (err) {
  console.log(err);
})

db.once('open',function () {
  // var cat = new Cat();
  // cat.name='lll';
  // cat.save()
  console.log('success');
})

// routes(app) 必须写在app.use(badyParser.json())之后，写在之前的话APP没有badyParser功能
// 在routes中。badyParser能够用
routes(app)

app.listen(4000, function () {
  console.log(__dirname);
  console.log('running on port 4000...');
})
