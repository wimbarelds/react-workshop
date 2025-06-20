import type { FunctionComponent, ReactNode } from 'react';

export type SlideComponent = FunctionComponent<Record<never, never>>;
export type JsonData = boolean | string | number | null | JsonData[] | { [key: string]: JsonData };

export interface Slide {
  preview: ReactNode;
  view: SlideComponent;
  duration: number;
  type: 'slide' | 'assignment';
}

export interface Topic {
  title: ReactNode;
  slides: Slide[];
}

export type Slides = Topic[];
