import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
// 引入windi css
import WindiCSS from 'vite-plugin-windicss'

import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // element plus 自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // windi css
    WindiCSS(),
  ],
  // 配置文件系统别名
  resolve: {
    alias: {
      // 将根目录的src映射为@
      "@": path.resolve(__dirname, "src")
    }
  },
  // 配置代理
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})