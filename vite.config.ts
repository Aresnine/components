import { defineConfig } from "vite"
// 用来支持单文件组件
import vue from "@vitejs/plugin-vue"
// jsx支持
import vueJsx from "@vitejs/plugin-vue-jsx"
// unocss
import Unocss from "./config/unocss"
export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "xxooUI",
      fileName: "xxoo-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
})
