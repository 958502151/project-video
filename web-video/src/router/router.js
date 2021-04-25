const HelloWorld = () => import('../components/HelloWorld');
const login = () => import('../login/login');
const homeIndex = () => import('../index/index');

export default {
    routers: [
        {path: '/', component: login, name: 'login'},
        {path: '/login', component: login, name: 'login'},
        {path: '/HelloWorld', component: HelloWorld, name: 'HelloWorld', meta: { requirAuth: false } },
        {path: '/homeIndex', component: homeIndex, name: 'homeIndex'},
    ]
}