import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/qalb-connect/", // Set the base path for both local and production builds
  plugins: [react()],
  build: {
    cssCodeSplit: true, // ✅ Enable CSS code splitting
    minify: "esbuild", // ✅ Ensure CSS & JS are minified
  },
  
});
