import type { ReactNode } from 'react';
import { cn } from './cn';

interface Props {
  className?: string;
  children?: ReactNode;
  center?: boolean;
  xl?: boolean;
}

export function Prose({ className, center, children, xl }: Props) {
  return (
    <article
      className={cn(
        `prose prose-invert w-full max-w-none`,
        { 'my-auto self-center': center },
        className,
        xl ? 'prose-xl' : 'prose-lg',
      )}
    >
      {children}
    </article>
  );
}
