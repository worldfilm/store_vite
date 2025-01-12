import './assets/css/base.css'
import './assets/css/reset.css'
import './assets/css/main.css'
import './assets/js/flexible.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
