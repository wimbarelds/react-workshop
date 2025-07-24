import { createAssignment, createSlide, createSlides, createTopic } from 'wb-slides';

import { Agenda } from './01 Welkom/Agenda';
import Goals from './01 Welkom/Goals.mdx';
import Scope from './01 Welkom/Scope.mdx';
import Welkom from './01 Welkom/Welkom.mdx';
import Explanation from './02 GRWM/Explanation.mdx';
import Setup from './02 GRWM/Setup.mdx';
import Arrays from './03 JsTs/Arrays.mdx';
import Functions from './03 JsTs/Functions.mdx';
import Javascript from './03 JsTs/Javascript.mdx';
import Typescript from './03 JsTs/Typescript.mdx';
import Componenten from './04 React/Componenten.mdx';
import WatIsReact from './04 React/WatIsReact.mdx';
import Component from './05 Componenten/Component.mdx';
import HelloWorld from './05 Componenten/HelloWorld.mdx';
import JSX from './05 Componenten/JSX.mdx';
import Children from './06 Props/Children.mdx';
import Props from './06 Props/Props.mdx';
import TaskList from './06 Props/TaskList.mdx';
import HideIfDone from './07 JS in JSX/HideIfDone.mdx';
import JsInJSX from './07 JS in JSX/JsInJsx.mdx';
import Lists from './07 JS in JSX/List.mdx';
import HuidigeCodeDoorlopen from './08.5 Recap/HuidigeCodeDoorlopen.mdx';
import Plan from './08.5 Recap/Plan.mdx';
import Recap from './08.5 Recap/Recap.mdx';
import StarterProject from './08.5 Recap/StarterProject.mdx';
import AddTask from './09 Hooks/AddTask.mdx';
import Hooks from './09 Hooks/Algemeen.mdx';
import MarkAsDone from './09 Hooks/MarkAsDone.mdx';
import ToggleHideDone from './09 Hooks/ToggleHideDone.mdx';
import UseState from './09 Hooks/UseState.mdx';
import WhatAreEffects from './09 Hooks/WhatAreEffects.mdx';
import WhenAllDone from './09 Hooks/WhenAllDone.mdx';
import DataLoading from './10 Fetch/DataLoading.mdx';
import PrepareDataLoading from './10 Fetch/Prep.mdx';
import InstallMui from './11 Libs/InstallMui.mdx';
import UsingButton from './11 Libs/UsingButton.mdx';
import UsingCard from './11 Libs/UsingCard.mdx';
import UsingList from './11 Libs/UsingList.mdx';
import WhatLibs from './11 Libs/WhatLibs.mdx';
import QnA from './12 QnA/QnA.mdx';
import MoreHooks from './13 Bonus/MoreHooks.mdx';
import ReactQuery from './13 Bonus/ReactQuery.mdx';
import Routing from './13 Bonus/Routing.mdx';
import UnderTheHood from './13 Bonus/UnderTheHood.mdx';

export const slides = createSlides([
  createTopic({
    title: 'Welkom & Intro',
    slides: [
      createSlide({ title: 'Welkom', component: Welkom }),
      createSlide({ title: 'Goals', component: Goals }),
      createSlide({ title: 'Agenda', component: Agenda }),
      createSlide({ title: 'Wel/niet in scope', component: Scope }),
    ],
  }),
  createTopic({
    title: 'Get ready with me?',
    slides: [
      createAssignment({ title: 'Setup', component: Setup }),
      createSlide({ title: 'Uitleg bestanden', component: Explanation }),
    ],
  }),
  createTopic({
    title: 'JavaScript & TypeScript',
    slides: [
      createSlide({ title: 'JavaScript', component: Javascript }),
      createSlide({ title: 'Functies', component: Functions }),
      createSlide({ title: 'Arrays', component: Arrays }),
      createSlide({ title: 'TypeScript', component: Typescript }),
    ],
  }),
  createTopic({
    title: 'Wat is React',
    slides: [
      createSlide({ title: 'f(x) = UI', component: WatIsReact }),
      createSlide({ title: 'Componenten', component: Componenten }),
    ],
  }),
  createTopic({
    title: 'Componenten & JSX',
    slides: [
      createSlide({ title: 'JSX', component: JSX }),
      createSlide({ title: 'Component', component: Component }),
      createAssignment({ title: 'Hello World', component: HelloWorld }),
    ],
  }),
  createTopic({
    title: 'Props & Children',
    slides: [
      createSlide({ title: 'Props', component: Props }),
      createSlide({ title: 'children', component: Children }),
      createAssignment({ title: 'Statische takenlijst', component: TaskList }),
    ],
  }),
  createTopic({
    title: 'Javascript in JSX',
    slides: [
      createSlide({ title: 'Condities & Lijsten', component: JsInJSX }),
      createAssignment({ title: 'Lijst renderen', component: Lists }),
      createAssignment({ title: 'Hide if Done', component: HideIfDone }),
    ],
  }),
  createTopic({
    title: 'Recap',
    slides: [
      createSlide({ title: 'plan voor vandaag', component: Plan }),
      createSlide({ title: 'Recap', component: Recap }),
      createSlide({ title: 'Typescript', component: Typescript }),
      createSlide({ title: 'HuidigeCodeDoorlopen', component: HuidigeCodeDoorlopen }),
      createAssignment({ title: 'opzetten project', component: StarterProject }),
    ],
  }),
  createTopic({
    title: 'Hooks',
    slides: [
      createSlide({ title: 'Hooks algemeen', component: Hooks }),
      createSlide({ title: 'useState', component: UseState }),
      createAssignment({ title: 'Toggle show/hide', component: ToggleHideDone }),
      createAssignment({ title: 'Nieuwe taak toevoegen', component: AddTask }),
      createAssignment({ title: 'Zet taak op afgerond', component: MarkAsDone }),
      createSlide({ title: 'Wat is een effect?', component: WhatAreEffects }),
      createAssignment({ title: 'Alert als alles afgerond', component: WhenAllDone }),
    ],
  }),
  createTopic({
    title: 'Data laden',
    slides: [
      createSlide({ title: 'Data voorbereiden', component: PrepareDataLoading }),
      createAssignment({ title: 'Data ophalen met fetch', component: DataLoading }),
    ],
  }),
  createTopic({
    title: 'Component Library (MUI)',
    slides: [
      createSlide({ title: 'Component libraries', component: WhatLibs }),
      createAssignment({ title: 'Installeer MUI', component: InstallMui }),
      createAssignment({ title: 'Gebruik Card', component: UsingCard }),
      createAssignment({ title: 'Gebruik List', component: UsingList }),
      createAssignment({ title: 'Gebruik Button', component: UsingButton }),
    ],
  }),
  createTopic({ title: 'Q & A', slides: [createSlide({ title: 'Vragen?', component: QnA })] }),
  createTopic({
    title: 'Bonus content',
    slides: [
      createAssignment({ title: 'More hooks', component: MoreHooks }),
      createAssignment({ title: 'Routing', component: Routing }),
      createSlide({ title: 'Under the hood', component: UnderTheHood }),
      createAssignment({ title: 'React query', component: ReactQuery }),
    ],
  }),
]);
