import { MDXProvider } from '@mdx-js/react';
import { Outlet } from 'react-router-dom';

import { cn } from './shared/cn';
import { Prose } from './shared/Prose';
import { useSlide } from './slideStore';
import { Nav } from './ui/Nav';

export function App() {
  const slide = useSlide();

  return (
    <>
      <div
        className={cn('fixed h-full bg-black/50 w-6xl max-w-full left-1/2 -translate-x-1/2')}
        data-background
      />
      <main className={cn('z-10 max-w-6xl p-12 pt-16 w-full mx-auto')} data-slide={slide.type}>
        <MDXProvider components={{ wrapper: Prose }}>
          <Outlet />
        </MDXProvider>
      </main>
      <Nav />
    </>
  );
}
