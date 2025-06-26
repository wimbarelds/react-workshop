import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

function baseHrefPlugin(base: string): PluginOption {
  return {
    name: 'html-transform',
    config: (config) => ({ ...config, base }),
    transformIndexHtml: () => [{ tag: 'base', attrs: { href: base }, injectTo: 'head-prepend' }],
  };
}

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      plugins: [react(), tailwindcss(), baseHrefPlugin('/react-workshop/')],
    };
  }
  return {
    plugins: [react(), tailwindcss()],
  };
});
