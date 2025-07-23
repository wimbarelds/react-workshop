import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  type RouteObject,
  StaticRouterProvider,
} from 'react-router';
import { SlidesProvider } from 'wb-slides';

import { routes } from './routes';
import { slides } from './slides/slides';

export function getRouterPaths() {
  const paths = new Set<string>();
  function addRouteUrls(route: RouteObject) {
    if (route.path && (route.element || route.Component)) paths.add(route.path);
    if (route.children) route.children.forEach(addRouteUrls);
  }
  routes.forEach(addRouteUrls);
  return Array.from(paths);
}

export async function render(request: Request, basename?: string) {
  const handler = createStaticHandler(routes, { basename });

  // Query the handler with the request to get the routing context
  const context = await handler.query(request);

  if (context instanceof Response) throw context;

  // Create the server-side router instance
  const router = createStaticRouter(handler.dataRoutes, context);

  return renderToString(
    <React.StrictMode>
      <SlidesProvider slides={slides}>
        <StaticRouterProvider router={router} context={context} />
      </SlidesProvider>
    </React.StrictMode>,
  );
}
