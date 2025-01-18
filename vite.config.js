import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',  // 监听所有地址，包括局域网 IP
    port: 8080,       // 你希望使用的端口，可以更改为你需要的端口
    open: true        // 自动在默认浏览器中打开
  }
})
