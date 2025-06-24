import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import exampleState1 from './examples/ExampleState1.jsx?raw';
import exampleState2 from './examples/ExampleState2.jsx?raw';

export function UseState() {
  return (
    <Prose>
      <h1>
        <code>useState</code>
      </h1>
      <p>
        We gebruiken de <code>useState</code> hook om de state van (delen van) de applicatie in op
        te slaan
      </p>
      <h2>Voorbeeld 1</h2>
      <Code code={exampleState1} />
      <h2>Voorbeeld 2</h2>
      <Code code={exampleState2} />
      <p>
        Let op, de state value is <em>immutable</em>, de waarde mag alleen met de <em>setState</em>{' '}
        functie worden aangepast.
      </p>
    </Prose>
  );
}
