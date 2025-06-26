import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { slides } from './slides/slides';
import type { Slide } from './types';

function slideToRoute(slide: Slide) {
  return {
    path: slide.path,
    element: <slide.view />,
  };
}

const slideRoutes = slides
  .flatMap((topic) => topic.slides.map(slideToRoute))
  .map((route, index) => (index > 0 ? route : { ...route, index: true }));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: slideRoutes,
  },
]);
