const routers = [
  {
    path: '/',
    meta: {
        title: 'desboard',
    },
    component: (resolve) => require(['../components/Home/index.vue'], resolve)
  },
  {
    path: '/app',
    meta: {
        title: '应用中心'
    },
    component: (resolve) => require(['../components/AppCenter/index.vue'], resolve)
  }
];
export default routers;