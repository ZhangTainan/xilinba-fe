import {
    createApp
} from 'vue'
import './style.css'

// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

app.use(ElementPlus)

createApp(App).mount('#app')