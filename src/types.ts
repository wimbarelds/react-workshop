import type { FunctionComponent, ReactNode } from 'react';

export type SlideComponent = FunctionComponent<Record<never, never>>;
export type JsonData = boolean | string | number | null | JsonData[] | { [key: string]: JsonData };

export interface BaseSlide {
  preview: ReactNode;
  view: SlideComponent;
  duration: number;
  type: 'slide' | 'assignment';
}

export interface Slide extends BaseSlide {
  path: string;
}

export interface Topic {
  title: string;
  slides: Slide[];
  path: string;
}

export type Slides = Topic[];
