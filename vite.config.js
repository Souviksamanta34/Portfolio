import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  base: "./",
  publicDir: "public-next",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    include: ["tests/**/*.test.{js,jsx}"],
    restoreMocks: true,
  },
});
