'use strict'

module.exports = function (Router) {
  const router = new Router()
  // router.use(middlewares.auth)

  // for frontend reload page
  router.get('/', async (req,res)=> {
    await req.render('index',{title:'test'})
  })
  router.get('/app', async (req,res)=> {
    await req.render('index',{title: req.url})
  })
  return router.routes()
}
