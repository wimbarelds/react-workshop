import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, type UserConfig } from 'vite';
import { vitePluginGhPagesBase, vitePluginMdx, vitePluginMuiIcons } from 'wb-slides/vite';

export default defineConfig(({ command }): UserConfig => {
  const baseConfig: UserConfig = {
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
  if (command !== 'build') return baseConfig;

  return {
    ...baseConfig,
    resolve: {
      alias: [
        {
          find: '/src/main.tsx',
          replacement: '/src/entry-client.tsx',
        },
      ],
    },
    environments: {
      client: {
        consumer: 'client',
        build: {
          minify: false,
          outDir: 'dist/client',
        },
      },
      server: {
        consumer: 'server',
        build: {
          copyPublicDir: false,
          outDir: 'dist/server',
          minify: false,
          rollupOptions: {
            input: 'src/entry-server.tsx',
          },
        },
      },
    },
    builder: {
      buildApp: async (builder) => {
        const environments = Object.values(builder.environments);
        await Promise.all(environments.map((env) => builder.build(env)));

        import('./src/prerender').then(({ prerender }) => {
          prerender();
        });
      },
    },
  };
});
