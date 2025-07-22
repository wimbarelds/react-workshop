import { createRootRoute, Layout, slidesToRoutes } from 'wb-slides';

import { slides } from './slides/slides';

export const routes = [
  createRootRoute({
    LayoutComponent: Layout,
    children: slidesToRoutes(slides),
  }),
];
