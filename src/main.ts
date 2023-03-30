import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'animate.css';
import './assets/css/main.css'
import './assets/commonjs/fontSize.js'
const app = createApp(App)
import componentRegister from "@/assets/commonjs/componentRegister.js";
//全局注册
app.use(componentRegister)
app.use(createPinia())
app.use(router)

app.mount('#app')
