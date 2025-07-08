import type { ReactNode } from 'react';

import type { BaseSlide, SlideComponent, Slides } from '../types';
import { Agenda } from './01 Welkom/Agenda';
import { Goals } from './01 Welkom/Goals';
import { InScope } from './01 Welkom/InScope';
import { Welkom } from './01 Welkom/Welkom';
import { Explanation } from './02 GRWM/Explanation';
import { Setup } from './02 GRWM/Setup';
import { Voorbeeld } from './02 GRWM/Voorbeeld';
import { Arrays } from './03 JsTs/Arrays';
import { Functions } from './03 JsTs/Functions';
import { Javascript } from './03 JsTs/Javascript';
import { Typescript } from './03 JsTs/Typescript';
import { Componenten } from './04 React/Componenten';
import { WatIsReact } from './04 React/WatIsReact';
import { Component } from './05 Componenten/Component';
import { HelloWorld } from './05 Componenten/HelloWorld';
import { JSX } from './05 Componenten/JSX';
import { Children } from './06 Props/Children';
import { Props } from './06 Props/Props';
import { TaskList } from './06 Props/TaskList';
import { HideIfDone } from './07 JS in JSX/HideIfDone';
import { JsInJSX } from './07 JS in JSX/JsInJsx';
import { Lists } from './07 JS in JSX/List';
import { Pizza, PizzaPreview } from './08 Pizza/Pizza';
import { AddTask } from './09 Hooks/AddTask';
import { Hooks } from './09 Hooks/Algemeen';
import { MarkAsDone } from './09 Hooks/MarkAsDone';
import { ToggleHideDone } from './09 Hooks/ToggleHideDone';
import { UseState } from './09 Hooks/UseState';
import { WhatAreEffects } from './09 Hooks/WhatAreEffects';
import { WhenAllDone } from './09 Hooks/WhenAllDone';
import { DataLoading } from './10 Fetch/DataLoading';
import { PrepareDataLoading } from './10 Fetch/Prep';
import { InstallMui } from './11 Libs/InstallMui';
import { UsingButton } from './11 Libs/UsingButton';
import { UsingCard } from './11 Libs/UsingCard';
import { UsingList } from './11 Libs/UsingList';
import { WhatLibs } from './11 Libs/WhatLibs';
import { QnA } from './12 QnA/QnA';
import { MoreHooks } from './13 Bonus/MoreHooks';
import { ReactQuery } from './13 Bonus/ReactQuery';
import { Routing } from './13 Bonus/Routing';
import { UnderTheHood } from './13 Bonus/UnderTheHood';

export const slides: Slides = [];

const getSlideSlug = (slide: BaseSlide) => {
  if (typeof slide.preview === 'string') return slide.preview;
  return slide.view.displayName || slide.view.name;
};

const addTopic = (title: string, content: BaseSlide | BaseSlide[]) => {
  if (!Array.isArray(content)) return addTopic(title, [content]);

  const getPath = (slide: BaseSlide) => `/${slugify(title)}/${slugify(getSlideSlug(slide))}`;
  const mapSlide = (slide: BaseSlide) => ({ ...slide, path: getPath(slide) });
  const topicSlides = content.map(mapSlide);

  slides.push({ title, slides: topicSlides, path: topicSlides[0].path });
};

const slide = (preview: ReactNode, duration: number, component: SlideComponent): BaseSlide => ({
  preview,
  duration,
  view: component,
  type: 'slide',
});

const assignment = (
  preview: ReactNode,
  duration: number,
  component: SlideComponent,
): BaseSlide => ({
  ...slide(preview, duration, component),
  type: 'assignment',
});

addTopic('Welkom & Intro', [
  slide('Welkom', 3, Welkom),
  slide('Goals', 3, Goals),
  slide('Agenda', 1, Agenda),
  slide('Wel/niet in scope', 3, InScope),
]);

addTopic('Get ready with me?', [
  slide('Uitleg & Voorbeeld', 3, Voorbeeld),
  assignment('Setup', 10, Setup),
  slide('Uitleg bestanden', 2, Explanation),
]);

addTopic('JavaScript & TypeScript', [
  slide('JavaScript', 5, Javascript),
  slide('Functies', 5, Functions),
  slide('Arrays', 5, Arrays),
  slide('TypeScript', 10, Typescript),
]);

addTopic('Wat is React', [slide('f(x) = UI', 4, WatIsReact), slide('Componenten', 6, Componenten)]);

addTopic('Componenten & JSX', [
  slide('JSX', 5, JSX),
  slide('Component', 5, Component),
  assignment('Hello World', 5, HelloWorld),
]);

addTopic('Props & Children', [
  slide('Props', 4, Props),
  slide('children', 4, Children),
  assignment('Statische takenlijst', 7, TaskList),
]);

addTopic('Javascript in JSX', [
  slide('Condities & Lijsten', 5, JsInJSX),
  assignment('Lijst renderen', 5, Lists),
  assignment('Hide if Done', 5, HideIfDone),
]);

addTopic('Pizza!', [slide(<PizzaPreview />, 40, Pizza)]);

addTopic('Hooks', [
  slide('Hooks algemeen', 3, Hooks),
  slide('useState', 10, UseState),
  assignment('Toggle show/hide', 7, ToggleHideDone),
  assignment('Nieuwe taak toevoegen', 15, AddTask),
  assignment('Zet taak op afgerond', 15, MarkAsDone),
  slide('Wat is een effect?', 5, WhatAreEffects),
  assignment('Alert als alles afgerond', 10, WhenAllDone),
]);

addTopic('Data laden', [
  slide('Data voorbereiden', 5, PrepareDataLoading),
  assignment('Data ophalen met fetch', 10, DataLoading),
]);

addTopic('Component Library (MUI)', [
  slide('Wat zijn component libraries?', 5, WhatLibs),
  assignment('Installeer MUI', 10, InstallMui),
  assignment('Gebruik Card', 3, UsingCard),
  assignment('Gebruik List', 5, UsingList),
  assignment('Gebruik Button', 2, UsingButton),
]);

addTopic('Q & A', [slide('Vragen?', 10, QnA)]);

addTopic('Bonus content', [
  assignment('More hooks', 0, MoreHooks),
  assignment('Routing', 0, Routing),
  slide('Under the hood', 0, UnderTheHood),
  assignment('React query', 0, ReactQuery),
]);

// Change slide 0/0 path to '/'
slides[0].path = '/';
slides[0].slides[0].path = '/';

// Helper functie
function slugify(str: string): string {
  return str
    .toString()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}
