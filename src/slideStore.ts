import { create } from 'zustand';

import { useMemo } from 'react';
import { slides } from './slides/slides';

interface SlideStore {
  topicIndex: number;
  slideIndex: number;
  setIndeces: (topicIndex: number, slideIndex: number) => void;
}

const useStore = create<SlideStore>((set) => ({
  topicIndex: 0,
  slideIndex: 0,
  setIndeces: (topicIndex, slideIndex) => set({ topicIndex, slideIndex }),
}));

function changeSlide(diff: 1 | -1) {
  const { topicIndex, slideIndex } = useStore.getState();
  const topic = slides[topicIndex];

  if (topic.slides[slideIndex + diff]) {
    return useStore.setState({ topicIndex, slideIndex: slideIndex + diff });
  }

  const targetTopic = slides[topicIndex + diff];
  if (!targetTopic) return;

  // next topic -> slide index 0
  if (diff === 1) return useStore.setState({ topicIndex: topicIndex + 1, slideIndex: 0 });
  // prev topic -> slide index last
  return useStore.setState({
    topicIndex: topicIndex - 1,
    slideIndex: targetTopic.slides.length - 1,
  });
}

export const useSlide = () => {
  return useStore(({ topicIndex, slideIndex }) => slides[topicIndex].slides[slideIndex]);
};

export const useSetSlideIndeces = () => useStore((store) => store.setIndeces);

export const useSlideNav = () => {
  const nextSlide = () => changeSlide(1);
  const prevSlide = () => changeSlide(-1);
  return { nextSlide, prevSlide };
};

export const useTopics = () =>
  useMemo(() => {
    return slides.map((topic): [string, number] => {
      return [topic.title, topic.slides.reduce((sum, cur) => sum + cur.duration, 0)];
    });
  }, []);

export const useHasPrevSlide = () =>
  useStore(({ slideIndex, topicIndex }) => Boolean(topicIndex || slideIndex));
export const useHasNextSlide = () =>
  useStore(({ slideIndex, topicIndex }) => {
    return Boolean(slides[topicIndex + 1] || slides[topicIndex].slides[slideIndex + 1]);
  });

export const useSlides = () => slides;
