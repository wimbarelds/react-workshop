import { create } from 'zustand';

import type { Slide, SlideComponent, Slides } from './types';
import { Welkom } from './slides/01/Welkom';
import { type ReactNode } from 'react';

const slides: Slides = [];
const addTopic = (title: string, content: Slide | Slide[]) => {
  if (Array.isArray(content)) slides.push({ title, slides: content });
  else slides.push({ title, slides: [content] });
};

const Placeholder = () => 'Placeholder';
const slide = (
  preview: ReactNode,
  duration: number,
  component: SlideComponent = Placeholder,
): Slide => ({
  preview,
  duration,
  view: component,
  type: 'slide',
});

const assignment = (
  preview: ReactNode,
  duration: number,
  component: SlideComponent = Placeholder,
): Slide => ({
  ...slide(preview, duration, component),
  type: 'assignment',
});

addTopic('Welkom & Intro', [
  slide('Welkom', 1, Welkom),
  slide('Goals', 2),
  slide('Agenda', 3),
  slide('Wel/niet in scope', 4),
]);

addTopic('Get ready with me?', [
  slide('Uitleg & Voorbeeld', 3),
  assignment('Setup', 10),
  slide('Uitleg bestanden', 2),
]);

addTopic('Wat is React', [slide('f(x) = UI', 4), slide('Componenten', 6)]);

addTopic('Componenten & JSX', [
  slide('JSX', 5),
  slide('Component', 5),
  slide('Component in JSX', 5),
  assignment('Hello World', 5),
]);

addTopic('Props & Children', [
  slide('Props', 4),
  slide('children', 4),
  assignment('Statische takenlijst', 7),
]);

addTopic('Javascript in JSX', [
  slide('Voorwaarden & Lijsten', 5),
  assignment('Maak een lijst', 5),
  assignment('Verberg afgerond', 5),
]);

addTopic('Hooks', [
  slide('Hooks algemeen', 2),
  slide('useState', 5),
  assignment('Toggle show/hide', 8),
  slide('Pizza break!', 40),
  assignment('Lijst in state', 5),
  slide('Event handling', 5),
  assignment('Nieuwe taak toevoegen', 10),
  slide('Functie als prop', 5),
  assignment('Zet taak op afgerond', 10),
]);

addTopic('useEffect', [
  slide('Wat is een effect?', 3),
  slide('Effect bij mounten', 2),
  assignment('Alert als alles afgerond', 10),
]);

addTopic('Data laden', [slide('Data ophalen met fetch', 5), assignment('Laad taken', 10)]);

addTopic('Component Library (MUI)', [
  slide('Wat zijn component libraries?', 2),
  slide('Wat is MUI?', 3),
  assignment('Installeer MUI', 5),
  assignment('Gebruik Card', 3),
  assignment('Gebruik List', 5),
  assignment('Gebruik Button', 2),
]);

addTopic('Q & A', [slide('Vragen?', 10)]);

addTopic('Bonus content', [
  slide('More hooks', 0),
  slide('Routing', 0),
  slide('Under the hood', 0),
  slide('React query', 0),
]);

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

export const useHasPrevSlide = () =>
  useStore(({ slideIndex, topicIndex }) => Boolean(topicIndex || slideIndex));
export const useHasNextSlide = () =>
  useStore(({ slideIndex, topicIndex }) => {
    return Boolean(slides[topicIndex + 1] || slides[topicIndex].slides[slideIndex + 1]);
  });

export const useSlides = () => slides;
