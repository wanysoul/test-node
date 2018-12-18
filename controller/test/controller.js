const router = require('koa-router')();
const db = require('../../src/db')

router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/test', async (ctx, next) => {
    // console.log(ctx.request.query)
    const data = ctx.request.query;
    // var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${data.name}!</h1>`;
});

router.get('/',async (ctx, next) => {
    const data = [{
        name:'wany',
        sex:'boy'
    }]
    await db.Article.all().then(docs => {
        console.log("hello tv")
        ctx.response.body = {
            data: docs
            };
    })
    
    
});

module.exports = router