import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { slides } from './slides/slides';

function getSlideIndicesFromPathname(pathname: string): [number, number] {
  for (let topicIndex = 0; topicIndex < slides.length; topicIndex++) {
    const topic = slides[topicIndex];
    for (let slideIndex = 0; slideIndex < topic.slides.length; slideIndex++) {
      const slide = topic.slides[slideIndex];
      if (slide.path === pathname) return [topicIndex, slideIndex];
    }
  }
  return [0, 0];
}

function changeSlide(
  topicIndex: number,
  slideIndex: number,
  diff: 1 | -1,
): [number, number] | undefined {
  const topic = slides[topicIndex];

  if (topic.slides[slideIndex + diff]) {
    return [topicIndex, slideIndex + diff];
  }

  const targetTopic = slides[topicIndex + diff];
  if (!targetTopic) return;

  // next topic -> slide index 0
  if (diff === 1) return [topicIndex + 1, 0];
  // prev topic -> slide index last
  return [topicIndex - 1, targetTopic.slides.length - 1];
}

export const useSlide = () => {
  const { pathname } = useLocation();
  const [topicIndex, slideIndex] = getSlideIndicesFromPathname(pathname);

  return slides[topicIndex].slides[slideIndex];
};

export const useSlideNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [topicIndex, slideIndex] = getSlideIndicesFromPathname(pathname);

  const nextSlide = () => {
    const newSlideIndices = changeSlide(topicIndex, slideIndex, 1);
    if (newSlideIndices) {
      const [newTopicIndex, newSlideIndex] = newSlideIndices;
      const newTopic = slides[newTopicIndex];
      const newSlide = newTopic.slides[newSlideIndex];
      navigate(newSlide.path);
    }
  };
  const prevSlide = () => {
    const newSlideIndices = changeSlide(topicIndex, slideIndex, -1);
    if (newSlideIndices) {
      const [newTopicIndex, newSlideIndex] = newSlideIndices;
      const newTopic = slides[newTopicIndex];
      const newSlide = newTopic.slides[newSlideIndex];
      navigate(newSlide.path);
    }
  };
  return { nextSlide, prevSlide };
};

export const useTopics = () =>
  useMemo(() => {
    return slides.map((topic): [string, number] => {
      return [topic.title, topic.slides.reduce((sum, cur) => sum + cur.duration, 0)];
    });
  }, []);

export const useHasPrevSlide = () => {
  const { pathname } = useLocation();
  const [topicIndex, slideIndex] = getSlideIndicesFromPathname(pathname);
  return Boolean(topicIndex || slideIndex);
};
export const useHasNextSlide = () => {
  const { pathname } = useLocation();
  const [topicIndex, slideIndex] = getSlideIndicesFromPathname(pathname);
  return Boolean(slides[topicIndex + 1] || slides[topicIndex].slides[slideIndex + 1]);
};

export const useSlides = () => slides;
