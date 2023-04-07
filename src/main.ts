import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'animate.css';
import './assets/css/main.css'
import './assets/commonjs/fontSize.js'
import { screenData } from '@/assets/commonjs/global.js'
const app = createApp(App)
// 屏幕基础数据做一个存储
app.config.globalProperties.$screenData = screenData
import componentRegister from "@/assets/commonjs/componentRegister.js";
//全局注册
app.use(componentRegister)
app.use(createPinia())
app.use(router)

app.mount('#app')
