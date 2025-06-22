import { Prose } from '../../shared/Prose';

export function Explanation() {
  return (
    <Prose>
      <h1>Uitleg bestanden</h1>
      <ul>
        <li>
          <code>package.json</code> - Welke dependencies hebben we?
        </li>
        <li>
          <code>index.html</code> - Basis HTML template
        </li>
        <li>
          <code>src/index.css</code> - Stylesheet
        </li>
        <li>
          <code>src/main.tsx</code> - Javascript entry-point
        </li>
        <li>
          <code>src/App.tsx</code> - "Root" component
        </li>
      </ul>
    </Prose>
  );
}
