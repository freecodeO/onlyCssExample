const koa = require('koa2');
const app = new koa();

app.listen(8080, () => {
  console.log('server starting at http://localhost:8080')
});

