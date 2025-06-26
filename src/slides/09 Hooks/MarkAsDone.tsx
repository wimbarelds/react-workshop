import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import exampleFn from './examples/ExampleSetDone.js?raw';

export function MarkAsDone() {
  return (
    <Prose>
      <h1>Markeer taak als afgerond</h1>
      <p>Nu gaan we de takenlijst aanpassen zodat je taken kan markeren als afgerond.</p>
      <p>Hoe kunnen we dat doen?</p>

      <h2>Functies als een prop</h2>
      <p>In React kan eigenlijk alles een prop zijn. Functies kunnen dus ook props zijn.</p>
      <p>
        Niet alleen gewone functies kunnen props zijn, maar de <em>set</em> functie die je
        terugkrijgt van <code>useState</code> kan ook als prop voor een ander component gebruikt
        worden. Dit maakt het mogelijk om niet alleen van parent naar child te communiceren, maar
        ook van de child terug naar de parent.
      </p>
      <p>
        Zo kan bijvoorbeeld ons <code>TaskList</code> component een functie meegeven aan het{' '}
        <code>Task</code> component, zodat een taak zichzelf kan markeren als "completed".
      </p>
      <p>De opdracht is dus om dat te bouwen, hier alvast een kleine helper functie</p>
      <Code code={exampleFn} />
    </Prose>
  );
}
