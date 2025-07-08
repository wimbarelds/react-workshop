import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import FunctionArrow from './examples/JavascriptFunctionArrow.js?raw';
import FunctionCallback from './examples/JavascriptFunctionCallback.js?raw';
import FunctionDeclaration from './examples/JavascriptFunctionDeclaration.js?raw';

export function Functions() {
  return (
    <Prose>
      <h1>Manieren om functies te schrijven</h1>
      <p>
        In JavaScript kan je een functie op meerdere manieren schrijven. Hoewel ze vaak hetzelfde
        resultaat geven, is het goed om de verschillende notaties te herkennen.
      </p>
      <p>
        Het is niet belangrijk dat je ze allemaal kan schrijven, of weten welke beter is; het is
        vooral belangrijk dat als je ze tegenkomt, je het kan lezen.
      </p>

      <h2>Een klassieke functie</h2>
      <Code code={FunctionDeclaration} />

      <p>
        Dit soort functie wordt vaak gebruikt voor grotere of belangrijke functies en componenten.
        Deze functie-syntax is vaak makkelijker te onderscheiden van andere code.
      </p>

      <h2>Arrow functie</h2>
      <p>Een tweede optie is de "arrow functie". Er zijn hier twee varianten van:</p>
      <Code code={FunctionArrow} />
      <p>Je hebt hier dus:</p>
      <ul>
        <li>
          Een optie met een functie-body (<code>{'{}'}</code>) en daarin een <code>return</code>{' '}
          statement.
        </li>
        <li>
          En een optie met een "impliciete return", ofwel je begint direct met de waarde die de
          functie terug geeft.
        </li>
      </ul>

      <h2>Callback</h2>
      <p>
        Die tweede optie met impliciete return wordt vooral vaak in zogenaamde "callbacks" gebruikt.
        Een callback is een functie die je meegeeft als argument aan andere functie.
      </p>
      <Code code={FunctionCallback} />
      <p>
        Hier is dus <code>{'(num) => num % 2 === 0'}</code> de callback die we meegeven aan de
        filter functie.
      </p>
    </Prose>
  );
}
