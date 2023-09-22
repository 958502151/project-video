const HelloWorld = () => import('../components/HelloWorld');
const login = () => import('../login/login');
const homeIndex = () => import('../index/index');
const videoOpen = () => import('../openVideo/videoOpen');
const detailsPage = () => import('../index/detailsPage');
const canvasTest = () => import('../components/canvasTest');
const userSet = () => import('../page/user/userSet');
const tentectVideo = () => import('../page/tentect/tentectVideo');

export default {
    routers: [
        {path: '/', component: login, name: 'login'},
        {path: '/login', component: login, name: 'login'},
        {path: '/HelloWorld', component: HelloWorld, name: 'HelloWorld', meta: { requirAuth: false } },
        {path: '/homeIndex', component: homeIndex, name: 'homeIndex'},
        {path: '/videoOpen', component: videoOpen, name: 'videoOpen'},
        {path: '/detailsPage', component: detailsPage, name: 'detailsPage'},
        {path: '/canvasTest', component: canvasTest, name: 'canvasTest'},
        {path: '/userSet', component: userSet, name: 'userSet'},
        {path: '/tentectVideo', component: tentectVideo, name: 'tentectVideo'},
    ]
}