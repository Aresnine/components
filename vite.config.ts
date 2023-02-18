import { defineConfig } from "vite"
// 用来支持单文件组件
import vue from "@vitejs/plugin-vue"
// jsx支持
import vueJsx from "@vitejs/plugin-vue-jsx"
export default defineConfig({
  plugins: [vue(), vueJsx()],
})
