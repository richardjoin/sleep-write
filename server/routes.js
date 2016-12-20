const Post = require('./models/post');

module.exports = function (app) {
// 请求API
  app.get('/', function (req,res) {
    // console.log('hello world');
    res.send()
    // 路径字符串拼接找到图片...
    // res.sendFile(path.join(__dirname+'/public/qq.png'))
  })

  app.post('/posts',function (req,res) {
    let title =req.body.title;
    let content =req.body.content;
    let post = new Post({title: title,content: content});
    post.save();
    res.json(req.body);
  })
  //
  app.get('/posts', function (req,res) {
    // exec执行
    // find找
    Post.find().exec(function (req,posts) {
      res.json({posts})
    })
  })

  app.get('/posts/:id', function(req, res){
     res.send('read one post!!!\n');
   })

   app.put('/posts/:id', function(req, res){
     res.send('update a post!');
   })

   app.delete('/posts/:id', function(req, res){
     res.send('delete a post!');
   })

}
