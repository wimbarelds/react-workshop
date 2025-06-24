import { Prose } from '../../shared/Prose';

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
    </Prose>
  );
}
