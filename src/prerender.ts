import { mkdir, readFile, rm, writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';

interface ServerEntry {
  getRouterPaths: () => string[];
  render: (request: Request) => Promise<string>;
}

export async function prerender({ getRouterPaths, render }: ServerEntry, outDir = 'dist') {
  const clientPath = resolve(import.meta.dirname, '..', outDir);
  const htmlPath = resolve(clientPath, 'index.html');

  const paths = getRouterPaths();
  const template = await readFile(htmlPath, { encoding: 'utf-8' });
  await rm(htmlPath);

  await writeFile(resolve(clientPath, 'template.html'), template, { encoding: 'utf-8' });

  await Promise.all(
    paths.map(async (path) => {
      const url = new URL('http://localhost');
      url.pathname = path;
      const html = await render(new Request(url));
      const routePath = path.startsWith('/') ? path.slice(1) : path;
      const targetPath = resolve(clientPath, routePath, 'index.html');
      const outputHtml = template
        .replace(/\r/g, '')
        .replace(/(\s*\n\s*)*<!--app-html-->(\s*\n\s*)*/, html ?? '');
      const targetDir = dirname(targetPath);
      await mkdir(targetDir, { recursive: true });
      await writeFile(targetPath, outputHtml, { encoding: 'utf-8' });
    }),
  );
}
