import { createSlide, createSlides, createTopic } from 'wb-slides';

import Opdracht00 from './Opdrachten/00-local-setup.mdx';
import Opdracht01 from './Opdrachten/01-override-text-field.mdx';
import Opdracht02 from './Opdrachten/02-count-characters.mdx';
import Opdracht03 from './Opdrachten/03-homepage-widget.mdx';
import Opdracht04 from './Opdrachten/04-password-input.mdx';
import Opdracht05 from './Opdrachten/05-application-label.mdx';
import Opdracht06 from './Opdrachten/06-menu-hover-contrast.mdx';
import Agenda from './Welkom/Agenda.mdx';
import Goals from './Welkom/Goals.mdx';

export const slides = createSlides([
  createTopic({
    title: 'Intro',
    slides: [
      createSlide({ title: 'Agenda', component: Agenda }),
      createSlide({ title: 'Goals', component: Goals }),
    ],
  }),
  createTopic({
    title: 'Opdrachten',
    slides: [
      createSlide({ title: 'initiële configuratie', component: Opdracht00 }),
      createSlide({ title: 'Override text field', component: Opdracht01 }),
      createSlide({ title: 'Count characters', component: Opdracht02 }),
      createSlide({ title: 'Homepage widget', component: Opdracht03 }),
      createSlide({ title: 'Password input', component: Opdracht04 }),
      createSlide({ title: 'Application label', component: Opdracht05 }),
      createSlide({ title: 'Menu hover contrast', component: Opdracht06 }), // <-- Willen we deze slide behouden?
    ],
  }),
]);
