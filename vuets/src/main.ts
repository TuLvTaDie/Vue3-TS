import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/ECharts'
import App from './App.vue'
import installIcons from '@/icons' // 这个

const app = createApp(App)

installIcons(app) // 这个

app.use(router)
   .use(ElementPlus)
   .mount('#app')