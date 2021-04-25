import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import videoRouter from './router/index';
// import { useRouter } from 'vue-router'

const app = createApp(App);
app.use(videoRouter);
// app.config.devtools = true;
// const route = useRouter();
// console.log(route);
app.use(ElementPlus).mount('#app');
