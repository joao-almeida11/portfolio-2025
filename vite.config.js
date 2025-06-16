import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import"],
      },
    },
  },
  plugins: [react()],
  base: "/portfolio-2025/",
});
