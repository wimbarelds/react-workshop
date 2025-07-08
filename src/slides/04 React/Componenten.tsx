import { useState } from 'react';

import { Checkbox } from '../../shared/Checkbox';
import { Prose } from '../../shared/Prose';

export function Componenten() {
  const [showComponents, setShowComponents] = useState(false);
  return (
    <Prose>
      <h1>Wat is React?</h1>
      <h2>React is een component-based UI-Library</h2>
      <p>
        Dat wil zeggen, als je een React-App bouwt, deel je de pagina op in steeds kleinere stukken.
      </p>
      <Checkbox show={showComponents} setShow={setShowComponents}>
        Laat componenten zien
      </Checkbox>
      <img
        src={showComponents ? 'steam-components.jpg' : 'steam-basic.jpg'}
        alt={
          showComponents
            ? 'Screenshot of steam homepage, with various components outlined'
            : 'Screenshot of steam homepage'
        }
      />
    </Prose>
  );
}
