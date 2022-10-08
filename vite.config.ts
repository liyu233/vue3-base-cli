import { fileURLToPath, URL } from "node:url";
import WindCSS from "vite-plugin-windicss";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// dev path
const url = {
  v1: "http://127.0.0.1:port",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), WindCSS()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: url.v1,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
