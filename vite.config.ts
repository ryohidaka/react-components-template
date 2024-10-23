import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [
    dts({
      exclude: [
        "src/example/",
        "**/*.test.ts",
        "**/*.test.tsx",
        "src/setupTests.ts",
      ],
    }),
    react(),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      exclude: [
        "**/**/index.ts",
        "eslint.config.js",
        "src/example",
        "dist",
        "docs",
        "vite.config.ts",
        "setup.ts",
        "src/vite-env.d.ts",
      ],
    },
    environment: "happy-dom",
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
