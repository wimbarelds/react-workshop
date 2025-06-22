import { Prose } from '../../shared/Prose';

export function HelloWorld() {
  return (
    <Prose>
      <h1>Hello World</h1>
      <p>Zoals wel vaker, we gaan eerst een simpel Hello World compoent maken.</p>
      <ol>
        <li>
          Maak een bestand <code>"HelloWorld.tsx"</code> in je <code>src</code> directory.
        </li>
        <li>Voeg je eerste component to in dat bestand. (vergeet hem niet te exporteren!)</li>
        <li>
          Importeer en gebruik jouw component in <code>"src/App.tsx"</code>.
        </li>
      </ol>
    </Prose>
  );
}
