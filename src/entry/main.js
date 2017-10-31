import Vue from 'vue'
// import App from '../App.vue'
import Layout from '../layout/index.vue'

import VueRouter from 'vue-router';
// import App from 'components/app.vue';    // 路由挂载
import Routers from '../router'     // 路由列表
import iView from 'iview';
// import 'iview/dist/styles/iview.css';    // 使用 CSS
import Util from '../libs/util';
Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});
/* 实例化一个vue */
new Vue({
  router: router,
  render: h => h(Layout)
}).$mount('#app')
