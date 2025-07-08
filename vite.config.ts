/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import minimist from 'minimist';
import { argv } from 'process';
import { defineConfig, type PluginOption } from 'vite';

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
