import { Prose } from '../../shared/Prose';
import Code from '../../shared/Code';
import JsxMap from './examples/JavascriptMap.js?raw';
import JsxFilter from './examples/JavascriptFunctionCallback.js?raw';

export function Arrays() {
  return (
    <Prose>
      <h1>Arrays</h1>
      <h2>Array Methoden (map & filter)</h2>
      <p>
        Arrays zijn een datastructuur in JavaScript voor een reeks waarden / een lijst. De{' '}
        <code>map</code> en <code>filter</code> methoden zijn hulpmiddelen om met arrays te werken.
      </p>
      <h3>
        <code>map()</code>
      </h3>
      <p>
        De <code>map()</code> methode maakt een nieuwe array aan door een functie uit te voeren op
        elk element van de originele array.
      </p>
      <Code code={JsxMap} />

      <h3>
        <code>filter()</code>
      </h3>
      <p>
        De <code>filter()</code> methode maakt een nieuwe array aan met alle elementen die slagen
        voor de test die door de opgegeven functie wordt geïmplementeerd.
      </p>
      <Code code={JsxFilter} />
    </Prose>
  );
}
