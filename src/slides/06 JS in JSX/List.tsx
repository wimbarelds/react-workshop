import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import exampleList from './examples/ExampleList.jsx?raw';

export function Lists() {
  return (
    <Prose>
      <h1>Een lijst renderen</h1>
      <p>De voglende taak is om je takenlijst te maken op basis van data.</p>
      <p>Sla een aantal taak-items op in een variable, en render die lijst</p>
      <p>Voorbeeld van hoe je lijst er uit zou kunnen zien:</p>
      <Code code={exampleList} />
      <p>(Copy paste gerust)</p>
    </Prose>
  );
}
