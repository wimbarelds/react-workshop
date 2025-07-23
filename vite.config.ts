import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { registerHooks } from 'module';
import { resolve } from 'path';
import { argv } from 'process';
import { BuildEnvironment, defineConfig, type UserConfig, type ViteBuilder } from 'vite';
import { adapter, analyzer } from 'vite-bundle-analyzer';
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
        ['chevron_right', 'chevron_left', 'stat_1', 'stat_minus_1', 'more_horiz', 'construction'],
        { inline: 'full' },
      ),
    ],
  };
  if (command !== 'build') return baseConfig;

  return {
    ...baseConfig,
    resolve: {
      alias: {
        '/src/main.tsx': '/src/entry-client.tsx',
        'react-router': resolve(
          import.meta.dirname,
          'node_modules/react-router/dist/production/index.mjs',
        ),
      },
    },
    environments: {
      client: {
        consumer: 'client',
        build: {
          rollupOptions: {
            treeshake: 'smallest',
            plugins: argv.includes('analyse')
              ? [
                  adapter(
                    analyzer({
                      enabled: true,
                      analyzerMode: 'static',
                      fileName: './dist/stats.html',
                    }),
                  ),
                ]
              : [],
          },
        },
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

const virtualModules = new Map<string, string>();
registerHooks({
  resolve: (specifier, context, next) => {
    if (!specifier.startsWith('ssg:')) return next(specifier, context);
    return { url: specifier, format: 'module', shortCircuit: true };
  },
  load: (url, context, next) => {
    if (!url.startsWith('ssg:')) return next(url, context);
    const source = virtualModules.get(url);
    if (!source) return next(url, context);
    return { source, format: 'module', shortCircuit: true };
  },
});

async function buildAndImport(builder: ViteBuilder, env: BuildEnvironment) {
  const virtualServerPath = 'ssg:server/index.js';
  const buildResult = await builder.build(env);
  const rollupOutput = Array.isArray(buildResult) ? buildResult[0] : buildResult;
  if ('emit' in rollupOutput)
    throw new Error('Server produced watch output, expected build output');

  virtualModules.set(virtualServerPath, rollupOutput.output[0].code);

  return await import(virtualServerPath);
}
