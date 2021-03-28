import {createApp} from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import toyComponents from '@/components'

const app = createApp(App);

app.use(toyComponents)
app.use(router);
app.use(store);
app.config.globalProperties.axios = axios;

app.mount('#app');

