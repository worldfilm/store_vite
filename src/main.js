import './assets/css/base.css'
import './assets/css/reset.css'
import './assets/css/main.css'
import './assets/js/flexible.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store_vuex/store.js'
import http from './http/http.js'

const app = createApp(App)
app.provide('$store', store)
app.use(router,store,http)
app.mount('#app')