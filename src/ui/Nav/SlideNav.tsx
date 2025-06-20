import type { Dispatch } from 'react';
import { useSetSlideIndeces, useSlide, useSlides } from '../../slideStore';
import { cn } from '../../shared/cn';

interface SlideNavProps {
  open?: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

export function SlideNav({ open, setOpen }: SlideNavProps) {
  const slide = useSlide();
  const slides = useSlides();
  const setSlideIndeces = useSetSlideIndeces();

  return (
    <nav
      className={cn('transition-all duration-400', {
        'opacity-0 -translate-y-full': !open,
      })}
    >
      <ul className="flex justify-center -mx-4">
        {slides.map((topic, topicIndex) => (
          <li className="w-34 flex flex-col" key={topicIndex}>
            <button
              onClick={() => setSlideIndeces(topicIndex, 0)}
              className="
                h-16 flex items-center justify-center text-center border p-1 rounded mx-2 mb-4
                py-2.5 leading-[1.2] bg-slate-100/75 text-black font-bold px-2
                transition hover:bg-slate-200
              "
            >
              {topic.title}
            </button>
            <ul className="flex flex-col items-stretch gap-4 px-2">
              {topic.slides.map((item, slideIndex) => {
                const isActive = item === slide;
                const isAssignment = item.type === 'assignment';
                return (
                  <li>
                    <button
                      key={slideIndex}
                      onClick={() => {
                        setSlideIndeces(topicIndex, slideIndex);
                        setOpen(false);
                      }}
                      className={cn(
                        'border p-1 rounded transition hover:scale-105 w-full py-2.5 leading-[1.2] opacity-75 bg-slate-800',
                        { 'border-yellow-500': isAssignment },
                        { 'border-2': isActive },
                        {
                          [isAssignment ? 'ring-2 ring-yellow-200' : 'ring-blue-500 ring-4']:
                            isActive,
                        },
                      )}
                    >
                      {item.preview}
                    </button>
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
