import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import svg from 'vite-plugin-svg';
import copy from 'rollup-plugin-copy';

import { dependencies, peerDependencies } from './package.json';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    dts({
      include: ['src/**/*'],
    }),
    svg(),
    copy({
      targets: [
        { src: 'src/styles/theme.ts', dest: 'dist/styles' }
      ],
      hook: 'writeBundle',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      output: {
        preserveModules: true,
        exports: 'named',
      },
    },
    target: 'esnext',
    sourcemap: true,
  },
  base: '/<REPO>/', // Update this if needed
});
