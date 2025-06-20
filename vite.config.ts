import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import"],
      },
    },
  },
  plugins: [
    react(),
    // visualizer({
    //   filename: "dist/stats.html",
    //   open: true, // automatically opens in browser
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
  base: "/portfolio-2025/",
});
