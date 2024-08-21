import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svg from "vite-plugin-svg";

import { dependencies, peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    dts({
      include: ["src/**/*"],
    }),
    svg(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      formats: ["es", "cjs"],
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      output: { preserveModules: true, exports: "named" },
    },

    target: "esnext",
    sourcemap: true,
  },
  base: "/<REPO>/",
});
