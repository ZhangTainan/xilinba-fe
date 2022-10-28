import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Index from '@/pages/Index.vue'
import NotFound from '@/pages/NotFound.vue'
import Admin from '@/pages/Admin.vue'
import User from '@/pages/user.vue'
import Login from '@/components/user/Login.vue'


// 配置路由规则
const routes = [

    {
        path: '/', // 路由
        name: "index", // 路由名字
        component: Index // 组件
    },
    {
        path: '/admin', // 路由
        component: Admin, // 组件
        name: "admin" // 路由名字
    },
    // 404页面，匹配所有不存在的路由
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFound
    },
    {
        path: '/user',
        component: User,
        children: [{
            path: "login",
            name: 'login',
            component: Login
        }]

    }

]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;