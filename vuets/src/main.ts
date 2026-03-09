import '@/assets/tailwind.css'
import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import '@/assets/ECharts'
import App from './App.vue'
import installIcons from '@/icons' // 这个
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

installIcons(app) // 这个
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
   .use(ElementPlus, {locale: zhCn})
   .mount('#app')