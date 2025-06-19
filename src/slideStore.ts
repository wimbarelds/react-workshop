import { create } from 'zustand';

import type { Slide, Slides } from './types';
import { Welkom } from './slides/01/Welkom';


const slides: Slides = [
  [{ preview: 'Welkom', view: Welkom }],
];

const firstSlide = slides[0][0];
const lastSlide = slides.at(-1)!.at(-1)!;

type SetSlideFn = (prev: Slide) => Slide;
interface SlideStore {
  slide: Slide;
  setSlide: (newSlide: Slide | SetSlideFn) => void;
}

const useStore = create<SlideStore>((set) => ({
  slide: firstSlide,
  setSlide: (newSlide) => {
    if (typeof newSlide !== 'function') return set({ slide: newSlide });
    return set((prev) => ({ slide: newSlide(prev.slide) }));
  },
}));

function changeSlide(current: Slide, diff: 1 | -1) {
  const topicIndex = slides.findIndex((topic) => topic.includes(current));
  const topic = slides[topicIndex];
  if (topicIndex === -1 || !topic) return current;
  const slideIndex = topic.indexOf(current);
  if (slideIndex === -1) return current;

  const newSlideIndex = slideIndex + diff;
  if (newSlideIndex >= 0 && newSlideIndex < topic.length) return topic[newSlideIndex];
  const newTopicIndex = newSlideIndex === -1 ? topicIndex - 1 : topicIndex + 1;
  if (newTopicIndex < 0 || newTopicIndex >= slides.length) return current;

  if (newTopicIndex > topicIndex) return slides[newTopicIndex][0];
  return slides[newTopicIndex].at(-1)!;
}

export const useSlide = () => useStore((state) => state.slide);
export const useSetSlide = () => useStore((state) => state.setSlide);

export const useSlideNav = () => {
  const setSlide = useSetSlide();
  const nextSlide = () => setSlide((prev) => changeSlide(prev, 1));
  const prevSlide = () => setSlide((prev) => changeSlide(prev, -1));
  return { nextSlide, prevSlide };
};

export const useHasPrevSlide = () => useStore(({ slide }) => slide !== firstSlide);
export const useHasNextSlide = () => useStore(({ slide }) => slide !== lastSlide);

export const useSlides = () => slides;
