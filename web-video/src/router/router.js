const HelloWorld = () => import(/* webpackChunkName: "HelloWorld" */ '../components/HelloWorld');
const login = () => import('../login/login');

export default {
    mode: 'history',
    base: 'base',
    routers: [
        {path: '/', component: login, name: 'login'},
        {path: '/HelloWorld', component: HelloWorld, name: 'HelloWorld', meta: { requirAuth: false } },
    ]
}