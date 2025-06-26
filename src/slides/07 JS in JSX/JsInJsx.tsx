import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import exampleCode from './examples/ExampleJsInJsx.jsx?raw';

export function JsInJSX() {
  return (
    <Prose>
      <h1>Condities en lijsten</h1>
      <p>Ofwel, Javascript gebruiken in JSX.</p>
      <p>
        Binnen JSX kan je <em>javascript expressies</em> gebruiken. Dat betekent dingen als dit:
      </p>
      <Code code={exampleCode} />
      <h2>Dus...</h2>
      <ul>
        <li>
          Javascript expressies tussen <code>{'{}'}</code>
        </li>
        <li>
          Met <code>&&</code> kan je iets wel/niet tonen, afhankelijk van of de waarde truthy of
          falsy is.
        </li>
        <li>
          Je kan ook ternary operators gebruiken (ofwel <code>{'condition ? "Ja" : "Nee"'}</code>)
        </li>
        <li>
          Je kan de items uit een array met <code>{'array.map'}</code> tonen, let wel op: React is
          voor elk item een unieke "key" property nodig.
        </li>
      </ul>
    </Prose>
  );
}
