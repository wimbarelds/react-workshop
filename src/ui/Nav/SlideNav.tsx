import type { Dispatch } from 'react';
import { useSetSlide, useSlide, useSlides } from '../../slideStore';
import { cn } from '../../shared/cn';

interface SlideNavProps {
  open?: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

export function SlideNav({ open, setOpen }: SlideNavProps) {
  const slide = useSlide();
  const slides = useSlides();
  const setSlide = useSetSlide();

  return (
    <div
      className={cn('flex justify-center gap-4 transition-all duration-400', {
        'opacity-0 -translate-y-full': !open,
      })}
    >
      {slides.map((topic, topicIndex) => (
        <div key={topicIndex} className="flex flex-col items-stretch gap-4">
          {topic.map((item, slideIndex) => {
            const isActive = item === slide;
            return (
              <button
                key={slideIndex}
                onClick={() => {
                  setSlide(item);
                  setOpen(false);
                }}
                className={cn(
                  'border p-1 rounded transition hover:scale-105 w-30 py-2.5 leading-[1.2] bg-slate-800 opacity-75',
                  { 'ring-2 ring-blue-500': isActive },
                )}
              >
                {item.preview}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
