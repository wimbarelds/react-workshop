import { Prose } from '../../shared/Prose';
import Code from '../../shared/Code';
import JsxIfElse from './examples/JavascriptIfElse.js?raw';
import JsxLogical from './examples/JavascriptLogicalOperators.js?raw';

export function Javascript() {
  return (
    <Prose>
      <h1>JavaScript</h1>
      <p>
        React is geschreven in JavaScript, en als we React gebruiken; dan schrijven we ook
        JavaScript. Hier zijn enkele basis-concepten die essentieel zijn voor het schrijven van
        JavaScript:
      </p>

      <h2>Conditionele Statements (if/else)</h2>
      <p>
        Conditionele statements worden gebruikt om verschillende acties uit te voeren op basis van
        verschillende condities.
      </p>
      <Code code={JsxIfElse} />

      <h2>Logische Operatoren (||, &&, !)</h2>
      <p>Logische operatoren worden gebruikt om condities samen te voegen.</p>
      <ul>
        <li>
          <code>&&</code> (AND): Beide voorwaarden moeten waar zijn.
        </li>
        <li>
          <code>||</code> (OR): Minstens één voorwaarde moet waar zijn.
        </li>
        <li>
          <code>!</code> (NOT): Keert de booleaanse waarde om.
        </li>
      </ul>
      <Code code={JsxLogical} />
      <p>
        Soms gebruik je daarnaast ook <code>{'()'}</code> om dingen eerst samen te voegen,
        bijvoorbeeld:
      </p>
      <Code code={'a && b || c'} />
      <p>Dit kan je op 2 manieren lezen:</p>
      <ul>
        <li>Optie 1: Als a en b true zijn, of c is true</li>
        <li>Optie 2: Als a true is, en b of c is true</li>
      </ul>
      <p>Om dit duidelijker te maken, zou je dit vaak schrijven als:</p>
      <Code code={'(a && b) || c'} />
    </Prose>
  );
}
