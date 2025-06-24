import { Prose } from '../../shared/Prose';

export function Hooks() {
  return (
    <Prose>
      <h1>Hooks?</h1>
      <h2>Abstract</h2>
      <p>
        Hooks zijn "speciale" functies, waarmee je aanhaakt bij de 'life-cycle' van React / React
        componenten.
      </p>
      <h2>Meer concreet</h2>
      <ul>
        <li>We gebruiken hooks om "state" van de applicatie in op te slaan</li>
        <li>We gebruiken hooks voor "side-effects"</li>
        <li>
          Hooks zijn functies en de naam van de functie begint altijd met <code>"use"</code>
        </li>
      </ul>
      <h2>En...</h2>
      <p>
        Er zijn een flink aantal hooks in React, maar we houden het in deze workshop bij de twee
        belangrijkste.
      </p>
    </Prose>
  );
}
