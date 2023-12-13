import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/ECharts'
import App from './App.vue'
import iconSvg from '@/components/iconSvg.vue'
// 导入 svgIcon
import installIcons from '@/icons'

const app = createApp(App)

installIcons(app)

app.use(router)
   .use(ElementPlus)
   .component('icon-svg', iconSvg)
   .mount('#app')