import {
    createApp
} from 'vue'

// ElementPlus配置
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'

// 默认样式
// import './style.css'

// 引入windi css
import 'virtual:windi.css'

import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus) // ElementPlus
app.use(router) // vue-router
app.mount('#app')