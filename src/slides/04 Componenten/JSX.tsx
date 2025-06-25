import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import jsxText from './examples/ExampleJSX.jsx?raw';

export function JSX() {
  return (
    <Prose>
      <h1>JSX: De basics</h1>
      <ul>
        <li>
          <b>JSX</b> brengt Javascript en HTML (in XML formaat) bij elkaar.
        </li>
        <li>
          Je gebruikt <code>{'<div>'}</code>, <code>{'<h1>'}</code>, enzovoort, direct in je code.
        </li>
        <li>JSX kan je in Javascript gebruiken, en Javascript kan je in JSX gebruiken.</li>
        <li>
          Sommige dingen zijn iets anders dan in HTML, bijvoorbeeld <code>class</code> is{' '}
          <code>className</code>.
        </li>
      </ul>
      <h2>Voorbeeld</h2>
      <Code code={jsxText} />
      <p>
        In dit voorbeeld is <code>naam</code> een javascript variabele, die door de <code>{}</code>{' '}
        in de HTML wordt verwerkt.
      </p>
    </Prose>
  );
}
