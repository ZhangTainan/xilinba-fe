import axios from 'axios'

const instance = axios.create({

    // baseURL: 'http://localhost:8080', // 指定axios请求前缀(不使用代理)
    baseURL: "/api", // 指定axios请求前缀,vite.config.js中使用代理将 http://localhost:8080 映射为了 /api
    timeout: 1000, // 请求超时时间

    // 请求头配置
    headers: {
        'X-Custom-Header': 'foobar'
    }
});
export default instance;