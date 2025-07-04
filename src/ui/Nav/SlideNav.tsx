import { useEffect, useRef, type Dispatch } from 'react';
import { useSlide, useSlides } from '../../slideStore';
import { cn } from '../../shared/cn';
import { Link } from 'react-router-dom';

interface SlideNavProps {
  open?: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

export function SlideNav({ open, setOpen }: SlideNavProps) {
  const navRef = useRef<HTMLElement>(null);
  const slide = useSlide();
  const slides = useSlides();

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;
    if (!open) return;

    const mainEl = document.querySelector('main');
    if (!mainEl) return;

    mainEl.inert = true;

    return () => {
      mainEl.inert = false;
    };
  }, [open]);

  return (
    <nav
      ref={navRef}
      aria-hidden={!open}
      aria-label="Slide navigation"
      className={cn('transition-all duration-400', {
        'opacity-0 -translate-y-full': !open,
      })}
    >
      <ul className="flex justify-center -mx-4" aria-label="Topics">
        {slides.map((topic, topicIndex) => (
          <li className="w-34 flex flex-col" key={topicIndex} aria-label={topic.title}>
            <Link
              to={topic.path}
              onClick={() => setOpen(false)}
              className="
                h-16 flex items-center justify-center text-center border p-1 rounded mx-2 mb-4
                py-2.5 leading-[1.2] bg-slate-100/75 text-black font-bold px-2
                transition hover:bg-slate-200
              "
            >
              {topic.title}
            </Link>
            <ul className="flex flex-col items-stretch gap-4 px-2">
              {topic.slides.map((item, slideIndex) => {
                const isActive = item === slide;
                const isAssignment = item.type === 'assignment';
                return (
                  <li key={slideIndex}>
                    <Link
                      to={item.path}
                      onClick={() => {
                        if (document.activeElement instanceof HTMLElement) {
                          document.activeElement.blur();
                        }
                        setOpen(false);
                      }}
                      className={cn(
                        'border p-1 rounded transition hover:scale-105 w-full py-2.5 leading-[1.2] opacity-75 bg-slate-800 block text-center',
                        { 'border-yellow-500': isAssignment },
                        { 'border-2': isActive },
                        {
                          [isAssignment ? 'ring-2 ring-yellow-200' : 'ring-blue-500 ring-4']:
                            isActive,
                        },
                      )}
                    >
                      {item.preview}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
