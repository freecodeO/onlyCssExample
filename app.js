const koa = require('koa');
const koaRouter = require('koa-router');
const fs = require('fs');
const koaStatic = require('koa-static');

const app = new koa();
const router = new koaRouter();
const staticView = koaStatic(__dirname + '/src/views')

router.get('/', (ctx) => {
  ctx.body = 'hello node';
})

router.get('/water', (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.createReadStream('./src/views/waterdroplet/index.html');
})

app.use(staticView);
app.use(router.routes()).use(router.allowedMethods());
app.listen(8080, () => {
  console.log('server: http://localhost:8080');
})