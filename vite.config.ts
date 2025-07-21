import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { vitePluginGhPagesBase, vitePluginMdx, vitePluginMuiIcons } from 'wb-slides/vite';

export default defineConfig(() => {
  return {
    plugins: [
      vitePluginMdx(),
      react(),
      tailwindcss(),
      vitePluginGhPagesBase(),
      vitePluginMuiIcons(
        'chevron_right',
        'chevron_left',
        'stat_1',
        'stat_minus_1',
        'more_horiz',
        'construction',
      ),
    ],
  };
});
