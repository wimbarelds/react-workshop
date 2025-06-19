import { useSlide } from './slideStore';
import { Nav } from './ui/Nav';

export function App() {
  const slide = useSlide();
  const Slide = slide.view;

  return (
    <>
      <div className="fixed h-full bg-slate-950/75 w-6xl max-w-full left-1/2 -translate-x-1/2" />
      <div className="z-10 max-w-6xl p-12 pt-16 w-full mx-auto">
        <Slide />
      </div>
      <Nav />
    </>
  );
}
