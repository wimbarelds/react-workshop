import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import example1 from './examples/ExampleComponent1.jsx?raw';
import example2 from './examples/ExampleComponent2.jsx?raw';
import example3 from './examples/ExampleComponent3.jsx?raw';

export function Component() {
  return (
    <Prose>
      <h1>Componenten en JSX</h1>
      <p>
        Een component in React is gewoon een functie die <code>JSX</code> returnt.
      </p>
      <Code code={example1} />
      <p>
        In component-a kan je component-b gebruiken, let wel op: De naam van een component begint
        altijd met een hoofdletter.
      </p>
      <Code code={example2} />
      <p>
        <strong>Let op:</strong> Een functie kan maar 1 waarde returnen, dus ook maar 1 JSX (root)
        element.
      </p>
      <p>
        Wil je toch dan 1 root-element terug geven? Gebruik dan een zogenaamd <code>Fragment</code>:
      </p>
      <Code code={example3} />
    </Prose>
  );
}
