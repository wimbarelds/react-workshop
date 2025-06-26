import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

const baseHrefPlugin: PluginOption = {
  name: 'html-basehref',
  transformIndexHtml: (_, ctx) => [
    { tag: 'base', attrs: { href: ctx.server?.config.base ?? '/' }, injectTo: 'head-prepend' },
  ],
};

export default defineConfig(() => ({
  plugins: [react(), tailwindcss(), baseHrefPlugin],
}));
