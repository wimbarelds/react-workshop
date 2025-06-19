import type { ComponentType, ReactNode } from 'react';

export type SlideComponent = ComponentType<Record<never, never>>;
export type JsonData = boolean | string | number | null | JsonData[] | { [key: string]: JsonData };

export interface Slide {
  preview: ReactNode;
  view: SlideComponent;
}

export type Slides = Slide[][];
