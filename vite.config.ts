import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { BuildEnvironment, defineConfig, type UserConfig, type ViteBuilder } from 'vite';
import { vitePluginGhPagesBase, vitePluginMdx, vitePluginMuiIcons } from 'wb-slides/vite';

import { prerender } from './src/prerender';

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
      alias: { '/src/main.tsx': '/src/entry-client.tsx' },
    },
    environments: {
      client: {
        consumer: 'client',
        build: { minify: false },
      },
      server: {
        consumer: 'server',
        resolve: { noExternal: true },
        build: {
          copyPublicDir: false,
          write: false,
          rollupOptions: { input: 'src/entry-server.tsx' },
        },
      },
    },
    builder: {
      buildApp: async (builder) => {
        const [serverEntry] = await Promise.all([
          buildAndImport(builder, builder.environments.server),
          builder.build(builder.environments.client),
        ]);

        const outDir = builder.environments.client.config.build.outDir;
        await prerender(serverEntry, outDir);
      },
    },
  };
});

async function buildAndImport(builder: ViteBuilder, env: BuildEnvironment) {
  const buildResult = await builder.build(env);
  const rollupOutput = Array.isArray(buildResult) ? buildResult[0] : buildResult;
  if ('emit' in rollupOutput)
    throw new Error('Server produced watch output, expected build output');

  const { code } = rollupOutput.output[0];
  const moduleUri = `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
  return await import(moduleUri);
}
