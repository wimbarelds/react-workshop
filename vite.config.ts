/// <reference types="vitest" />
import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { argv } from 'process';
import minimist from 'minimist';

const baseHrefPlugin = (): PluginOption => {
  const { base = '/' } = minimist(argv.slice(2));

  return {
    name: 'html-basehref',
    config: (current) => ({ ...current, base }),
    transformIndexHtml: () => [{ tag: 'base', attrs: { href: base }, injectTo: 'head-prepend' }],
  };
};

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), baseHrefPlugin()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  };
});
