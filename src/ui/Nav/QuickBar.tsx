import type { Dispatch, MouseEventHandler } from 'react';
import { useHasNextSlide, useHasPrevSlide, useSlideNav } from '../../slideStore';
import { cn } from '../../shared/cn';
import { More } from '../../svg/More';
import { Arrow } from '../../svg/Arrow';

interface BarProps {
  open?: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

export function QuickBar({ open, setOpen }: BarProps) {
  const hasPrev = useHasPrevSlide();
  const hasNext = useHasNextSlide();
  const { prevSlide, nextSlide } = useSlideNav();

  return (
    <div
      className={cn('flex items-center justify-between *:pointer-events-auto transition-all', {
        '-translate-y-full opacity-0 *:pointer-events-none': open,
      })}
    >
      <ArrowButton
        className="pr-0.5"
        disabled={!hasPrev}
        iconClass="rotate-270"
        onClick={() => prevSlide()}
      />
      <button
        className={cn('p-2 text-slate-300 hover:text-slate-50 ')}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        aria-label="Open slide navigator"
      >
        <div className="border border-current rounded-full bg-cyan-950 outline-cyan-950 outline-3">
          <More numDots={3} px={8} py={6} gap={8} radius={4} />
        </div>
      </button>
      <ArrowButton
        className="pl-0.5"
        disabled={!hasNext}
        iconClass="rotate-90"
        onClick={() => nextSlide()}
      />
    </div>
  );
}

interface ArrowButtonProps {
  onClick?: MouseEventHandler;
  disabled?: boolean;
  className?: string;
  iconClass?: string;
}
function ArrowButton({ className, disabled, iconClass, onClick }: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'bg-cyan-950',
        'border-2 rounded-full w-8 h-6 flex items-center justify-center',
        'border-current pointer-events-auto text-slate-300',
        'disabled:text-slate-400 disabled:cursor-default',
        className,
      )}
    >
      <Arrow width={15} height={10} thickness={3} className={iconClass} />
    </button>
  );
}
