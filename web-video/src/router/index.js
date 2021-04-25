// import { resolveComponent } from '@vue/runtime-core';
import { createRouter, createWebHistory  } from 'vue-router';
import routeConfig from './router';

console.log(routeConfig);
// console.log(resolveComponent);
const videoRouter = createRouter({
    history: createWebHistory (),
    routes: routeConfig['routers']
});
videoRouter.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !sessionStorage.getItem('login')) next({ name: 'login' })
    else next()
})

export default videoRouter;