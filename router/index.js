/*censed Materials - Property of tenxcloud.com
 * (C) Copyright 2016 TenxCloud. All Rights Reserved.
 *
 * Index route
 *
 * v0.1 - 2016-09-05
 * @author Zhangpc
 */
'use strict'

// const indexCtl = require('../controllers')
// const mode = require('../configs/model').mode
// const middlewares = require('../services/middlewares')

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
  // router.get('/quickentry', indexCtl.index)
  // router.get(/^(\/app_manage|\/app_manage\/[a-zA-Z0-9_-]+|\/app_manage\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+.+)(\/|)$/, indexCtl.index)
  // router.get(/^(\/app_center|\/app_center\/[a-zA-Z0-9_-]+|\/app_center\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+|\/app_center\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  // router.get(/^(\/database_cache|\/database_cache\/[a-zA-Z0-9_-]+|\/database_cache\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  // router.get(/^(\/container|\/container\/[a-zA-Z0-9_-]+|\/container\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  // router.get(/^(\/ci_cd|\/ci_cd\/[a-zA-Z0-9_-]+|\/ci_cd\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  // router.get(/^(\/account|\/account\/[a-zA-Z0-9_-]+|\/account\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+|\/account\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  // router.get(/^(\/manange_monitor|\/manange_monitor\/[a-zA-Z0-9_-]+|\/manange_monitor\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  // router.get(/^(\/integration|\/integration\/[a-zA-Z0-9_-]+|\/integration\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  // if (mode === 'enterprise') {
  //   router.get(/^(\/setting|\/setting\/[a-zA-Z0-9_-]+|\/setting\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+|\/setting\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  //   router.get(/^(\/cluster|\/cluster\/[a-zA-Z0-9\._-]+|\/cluster\/[a-zA-Z0-9\._-]+\/[\.a-zA-Z0-9_-]+|\/cluster\/[a-zA-Z0-9\._-]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  //   router.get(/^(\/base_station|\/base_station\/[a-zA-Z0-9\._-]+|\/base_station\/[a-zA-Z0-9\._-]+\/[\.a-zA-Z0-9_-]+|\/base_station\/[a-zA-Z0-9\._-]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  //   router.get(/^(\/platform_cell|\/platform_cell\/[a-zA-Z0-9\._-]+|\/platform_cell\/[a-zA-Z0-9\._-]+\/[\.a-zA-Z0-9_-]+|\/platform_cell\/[a-zA-Z0-9\._-]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  //   router.get(/^(\/api_dir|\/api_dir\/[a-zA-Z0-9\._-]+|\/api_dir\/[a-zA-Z0-9\._-]+\/[\.a-zA-Z0-9_-]+|\/api_dir\/[a-zA-Z0-9\._-]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  //   router.get(/^(\/tenant_manage|\/tenant_manage\/[a-zA-Z0-9\._-]+|\/tenant_manage\/[a-zA-Z0-9\._-]+\/[\.a-zA-Z0-9_-]+|\/tenant_manage\/[a-zA-Z0-9\._-]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)(\/|)$/, indexCtl.index)
  // }
  return router.routes()
}
