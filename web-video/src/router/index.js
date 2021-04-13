import Vue from 'vue';
import Router from 'vue-router';

import routeConfig from './route-config';
Vue.use(Router);
const videoRouter = new Router(routeConfig);
videoRouter.beforeEach((to, from, next) => {
    document.body.scrollTop = 0;
    next();
})

export default videoRouter;