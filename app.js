const koa = require('koa');
const koaRouter = require('koa-router');
const fs = require('fs');
const koaStatic = require('koa-static');

const app = new koa();
const router = new koaRouter();
const staticView = koaStatic(__dirname + '/views')

router.get('/', (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.createReadStream('./src/home.html');
})

router.get('/water', (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.createReadStream('./views/waterdroplet/index.html');
})

router.get('/bank', (ctx) => {
  ctx.type = 'text/html'
  ctx.body = fs.createReadStream('./views/bankcard/index.html');
})

app.use(staticView);
app.use(router.routes()).use(router.allowedMethods());
app.listen(8080, () => {
  console.log('server: http://localhost:8080');
})