const Koa = require('koa');
// const router = require('./controller/controller');
const bodyParser = require('koa-bodyparser');
const registerRouter = require('./controller')
// const MongoClient = require('mongodb').MongoClient
const db = require('./src/db')


// 创建一个Koa对象表示web app本身:
const app = new Koa();
const url = 'mongodb://localhost:27017/mydb';

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('anime_cartoon');
    // Find some documents
    collection.find({title:'复仇者集结第五季'}).toArray(function(err, docs) {
    //   assert.equal(err, null);
      console.log("Found the following records");
    //   console.log(docs)
      callback(docs);
    });
}

// 对于任何请求，app将调用该异步函数处理请求：

// app.use(async (ctx, next) => {
//     console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
//     await next(); // 调用下一个middleware
// });

// app.use(async (ctx, next) => {
//     console.log(ctx.request.query)
//     const query = ctx.request.query.query;
//     const start = new Date().getTime(); // 当前时间
//     await next(); // 调用下一个middleware
//     const ms = new Date().getTime() - start; // 耗费时间
//     console.log(`Time: ${ms}ms`); // 打印耗费时间
// });

// // app.use(async (ctx, next) => {
// //     await next();
// //     ctx.response.type = 'text/html';
// //     ctx.response.body = '<h1>Hello, koa2!</h1>';
// // });

// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });

// router.get('/test', async (ctx, next) => {
//     // console.log(ctx.request.query)
//     const data = ctx.request.query;
//     // var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${data.name}!</h1>`;
// });

// router.get('/',async (ctx, next) => {
//     const data = [{
//         name:'wany',
//         sex:'boy'
//     }]
//     // MongoClient.connect(url, function(err, db) {
//     //     // assert.equal(null, err);
//     //     console.log("Connected successfully to server");
//     //     findDocuments(db,function(docs,ctx){
//     //         console.log(docs)
//     //         db.close();
//     //     })
//     // });
//     // console.log(data())
//     // findDocuments()
//     console.log(db.Article.all())
//     await db.Article.all().then(docs => {
//         ctx.response.body = {
//             data: docs
//             };
//     })
      

      
    
// });

// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

// 在端口3000监听:
app.use(registerRouter());
app.use(bodyParser());
db()
app.listen(3000);
console.log('app started at port 3000...');