/// <reference types="vitest/config" />

import mdx from '@mdx-js/rollup';
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

const mdxPlugin = (): PluginOption => ({
  enforce: 'pre',
  ...mdx({ providerImportSource: '@mdx-js/react' }),
});

export default defineConfig(() => {
  return {
    plugins: [mdxPlugin(), react(), tailwindcss(), baseHrefPlugin()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  };
});
