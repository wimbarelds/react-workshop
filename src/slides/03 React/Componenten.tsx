import { useState } from 'react';
import { Prose } from '../../shared/Prose';
import { Checkbox } from '../../shared/Checkbox';

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
      <img src={showComponents ? 'steam-components.png' : 'steam-basic.png'} />
    </Prose>
  );
}
