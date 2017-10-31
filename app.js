const Koa = require('koa');
const c2k = require('koa-connect')
const serve = require('koa-static');
const Router = require('koa-router')
const indexRoutes = require('./router')
const app = new Koa();
// app.use(serve(__filename + './views'));
// x-response-time
app.use(indexRoutes(Router))
app.use(async (ctx,next) => {
  // ctx.body = 'Hello World';
  await next()
  console.log('sfsfsdff----------=> ntext0000000')
});

// logger

const koaBody = require('koa-body')({
  formLimit: 524288000
})
app.use(koaBody)

// For views
const render = require('koa-ejs')
const viewOps = {
  root: __dirname,
  layout: false,
  viewExt: 'html',
  debug: false,
  cache: true
}

render(app, viewOps)

// response
const webpack = require('webpack')
const koaWebpackDevMiddleware = require('koa-webpack-dev-middleware')
const expressWebpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')
const compiler = webpack(webpackConfig)
app.use(koaWebpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  watchOptions: {
    aggregateTimeout: 500,
    poll: true
  }
}))
app.use(c2k(expressWebpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
})))

// Serve static files
app.use(function* (next) {
  try {
    const serveStatic = require('koa-serve-static')
    const staticOpts = {}
    console.log('=============> try ')
    // Open cache in production mode
    // if (global.CONFIG_PROD) {
    //   staticOpts.maxAge = 1000 * 60 * 60 * 24 * 7 // 静态文件一周的缓存
    // }
    // if (this.path === '/favicon.ico') {
      // this.path = global.globalConfig.oemInfo.favoriteIcon
    //   staticOpts.maxAge = 0
    // }
    // yield serveStatic(__dirname + '/static', staticOpts)
  } catch (error) {
    this.status = 404
    console.log('===================> error',error)
    yield next
  }
})
app.listen(8000,()=> {
  console.log('open browser port in:8000')
});