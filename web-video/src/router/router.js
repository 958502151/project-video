const HelloWorld = () => import('../components/HelloWorld');
const login = () => import('../login/login');
const homeIndex = () => import('../index/index');
const videoOpen = () => import('../openVideo/videoOpen');

export default {
    routers: [
        {path: '/', component: login, name: 'login'},
        {path: '/login', component: login, name: 'login'},
        {path: '/HelloWorld', component: HelloWorld, name: 'HelloWorld', meta: { requirAuth: false } },
        {path: '/homeIndex', component: homeIndex, name: 'homeIndex'},
        {path: '/videoOpen', component: videoOpen, name: 'videoOpen'},
    ]
}