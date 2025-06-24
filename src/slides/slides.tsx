import type { ReactNode } from 'react';
import type { Slide, SlideComponent, Slides } from '../types';
import { Welkom } from './01 Welkom/Welkom';
import { Goals } from './01 Welkom/Goals';
import { Agenda } from './01 Welkom/Agenda';
import { InScope } from './01 Welkom/InScope';
import { Voorbeeld } from './02 GRWM/Voorbeeld';
import { Setup } from './02 GRWM/Setup';
import { Explanation } from './02 GRWM/Explanation';
import { WatIsReact } from './03 React/WatIsReact';
import { Componenten } from './03 React/Componenten';
import { JSX } from './04 Componenten/JSX';
import { Component } from './04 Componenten/Component';
import { HelloWorld } from './04 Componenten/HelloWorld';
import { Props } from './05 Props/Props';
import { Children } from './05 Props/Children';
import { TaskList } from './05 Props/TaskList';
import { JsInJSX } from './06 JS in JSX/JsInJsx';
import { Lists } from './06 JS in JSX/List';
import { HideIfDone } from './06 JS in JSX/HideIfDone';
import { Hooks } from './08 Hooks/Algemeen';
import { UseState } from './08 Hooks/UseState';
import { ToggleHideDone } from './08 Hooks/ToggleHideDone';
import { Pizza, PizzaPreview } from './07 Pizza/Pizza';
import { AddTask } from './08 Hooks/AddTask';
import { MarkAsDone } from './08 Hooks/MarkAsDone';
import { WhatAreEffects } from './08 Hooks/WhatAreEffects';
import { WhenAllDone } from './08 Hooks/WhenAllDone';
import { DataLoading } from './09 Fetch/DataLoading';
import { FetchTasks } from './09 Fetch/FetchTasks';
import { WhatLibs } from './10 Libs/WhatLibs';
import { InstallMui } from './10 Libs/InstallMui';
import { UsingCard } from './10 Libs/UsingCard';
import { UsingList } from './10 Libs/UsingList';
import { UsingButton } from './10 Libs/UsingButton';
import { QnA } from './11 QnA/QnA';
import { MoreHooks } from './12 Bonus/MoreHooks';
import { Routing } from './12 Bonus/Routing';
import { UnderTheHood } from './12 Bonus/UnderTheHood';
import { ReactQuery } from './12 Bonus/ReactQuery';

export const slides: Slides = [];
const addTopic = (title: string, content: Slide | Slide[]) => {
  if (Array.isArray(content)) slides.push({ title, slides: content });
  else slides.push({ title, slides: [content] });
};

const slide = (preview: ReactNode, duration: number, component: SlideComponent): Slide => ({
  preview,
  duration,
  view: component,
  type: 'slide',
});

const assignment = (preview: ReactNode, duration: number, component: SlideComponent): Slide => ({
  ...slide(preview, duration, component),
  type: 'assignment',
});

addTopic('Welkom & Intro', [
  slide('Welkom', 1, Welkom),
  slide('Goals', 2, Goals),
  slide('Agenda', 3, Agenda),
  slide('Wel/niet in scope', 4, InScope),
]);

addTopic('Get ready with me?', [
  slide('Uitleg & Voorbeeld', 3, Voorbeeld),
  assignment('Setup', 10, Setup),
  slide('Uitleg bestanden', 2, Explanation),
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
  slide('Hooks algemeen', 2, Hooks),
  slide('useState', 10, UseState),
  assignment('Toggle show/hide', 8, ToggleHideDone),
  assignment('Nieuwe taak toevoegen', 15, AddTask),
  assignment('Zet taak op afgerond', 15, MarkAsDone),
  slide('Wat is een effect?', 3, WhatAreEffects),
  assignment('Alert als alles afgerond', 10, WhenAllDone),
]);

addTopic('Data laden', [
  slide('Data ophalen met fetch', 5, DataLoading),
  assignment('Laad taken', 10, FetchTasks),
]);

addTopic('Component Library (MUI)', [
  slide('Wat zijn component libraries?', 2, WhatLibs),
  assignment('Installeer MUI', 5, InstallMui),
  assignment('Gebruik Card', 3, UsingCard),
  assignment('Gebruik List', 5, UsingList),
  assignment('Gebruik Button', 2, UsingButton),
]);

addTopic('Q & A', [slide('Vragen?', 10, QnA)]);

addTopic('Bonus content', [
  assignment('More hooks', 0, MoreHooks),
  assignment('Routing', 0, Routing),
  assignment('Under the hood', 0, UnderTheHood),
  assignment('React query', 0, ReactQuery),
]);
