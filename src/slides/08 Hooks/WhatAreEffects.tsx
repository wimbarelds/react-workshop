import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';

import effectExample from './examples/ExampleEffect.jsx?raw';

export function WhatAreEffects() {
  return (
    <Prose>
      <h1>Wat is een effect?</h1>
      <p>Ik had twee hooks beloofd, en we hebben er nog maar 1 gehad.</p>
      <p>
        De tweede hook heet <code>"useEffect"</code>, deze hook is bedoeld voor zogenaamde
        "side-effects". Een side-effect betekent eigenlijk dat je iets gaat doen als reactie ergens
        op.
      </p>
      <p>
        Andere frontend-frameworks hebben hier vaak iets duidelijkere namen voor, zoals bijvoorbeeld
        bij VueJS <code>onMounted</code>, <code>onChange</code>. In React hebben we hier een iets
        abstractere versie van.
      </p>
      <Code code={effectExample} />
      <h2>Uitleg</h2>
      <p>
        <code>useEffect</code> heeft 2 parameters:
      </p>
      <ol>
        <li>De callback functie</li>
        <li>De dependency array</li>
      </ol>
      <p>De dependency array bepaalt wanneer de callback wordt uitgevoerd.</p>
      <ul>
        <li>
          De callback wordt altijd direct een keer uitgevoerd zodra het component gerenderd is.
        </li>
        <li>
          Ook wordt de callback opnieuw uitgevoerd als een van de items uit de dependency array
          verandert.
        </li>
      </ul>
    </Prose>
  );
}
