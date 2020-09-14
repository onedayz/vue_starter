import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App'
import router_main from './router/router_main'

let router = createRouter({
    history: createWebHashHistory(),
    routes: router_main
})
const app = createApp(App);
app.use(router);
app.mount('#app');