import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import exampleFn from './examples/ExampleSetDone.js?raw';

export function FunctionsAsProps() {
  return (
    <Prose>
      <h1>Functies als een prop</h1>
      <p>
        In React kan eigenlijk (bijna?) alles een prop zijn. Functies kunnen dus ook props zijn.
      </p>
      <p>
        Niet alleen gewone functies kunnen props zijn, maar de <em>set</em> functie die je
        terugkrijgt van <code>useState</code> kan ook als prop voor een ander component gebruikt
        worden.
      </p>
      <p>
        Dit betekent dus dat je een functie die jouw lijst taken aanpast kan doorgeven aan een taak
        component, zodat een taak component zichzelf kan markeren als "completed".
      </p>
      <Code code={exampleFn} />
    </Prose>
  );
}
