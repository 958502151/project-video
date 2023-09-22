import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import videoRouter from './router/index';
import '@/network/index.js'
import 'video.js/dist/video-js.css'
// import Video from 'video.js';
// import { useRouter } from 'vue-router'

const app = createApp(App);
app.use(videoRouter);
app.use(ElementPlus).mount('#app');

