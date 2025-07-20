import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SlidesRouterProvider } from 'wb-slides';

import { slides } from './slides/slides';

createRoot(document.querySelector('#app')!).render(
  <StrictMode>
    <SlidesRouterProvider slides={slides} />
  </StrictMode>,
);
