import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./env",
  plugins: [react(), svgrPlugin(), ViteImageOptimizer({ test: /\.svg$/i })],
  test: { environment: "happy-dom" },
});
