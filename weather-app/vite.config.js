import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/documents": {
        target: "http://server-cluster-ip-service:8888",
        changeOrigin: true,
      },
      "/weather": {
        target: "http://server-cluster-ip-service:8888",
        changeOrigin: true,
      },
      "/citylist": {
        target: "http://server-cluster-ip-service:8888",
        changeOrigin: true,
      },
      "/history": {
        target: "http://server-cluster-ip-service:8888",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
