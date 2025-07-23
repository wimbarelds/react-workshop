import './index.css';

import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { SlidesProvider } from 'wb-slides';

import { routes } from './routes';
import { slides } from './slides/slides';

const basename = new URL(document.baseURI).pathname || undefined;
const router = createBrowserRouter(routes, { basename });

hydrateRoot(
  document.querySelector('#app')!,
  <StrictMode>
    <SlidesProvider slides={slides}>
      <RouterProvider router={router} />
    </SlidesProvider>
  </StrictMode>,
);
