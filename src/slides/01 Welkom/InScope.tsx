import { Prose } from '../../shared/Prose';

export function InScope() {
  return (
    <Prose>
      <h1>Wel / Niet in scope</h1>
      <div className="flex gap-8">
        <section className="flex-1">
          <h2 className="mb-2">In scope</h2>
          <ul className="list-disc ml-5">
            <li>Wat is React?</li>
            <li>Componenten & JSX</li>
            <li>Props & children</li>
            <li>
              State met <code>useState</code>
            </li>
            <li>
              Effecten met <code>useEffect</code>
            </li>
            <li>Lijsten & condities in JSX</li>
            <li>
              Data laden met <code>fetch</code>
            </li>
            <li>Introductie tot MUI (component library)</li>
          </ul>
        </section>
        <section className="flex-1">
          <h2 className="mb-2">Niet in scope</h2>
          <ul className="list-disc ml-5">
            <li>Formulieren & validatie</li>
            <li>Styling opties</li>
            <li>Redux of andere state libraries</li>
            <li>
              Meer hooks (<code>useContext</code>, <code>useMemo</code>, <code>useCallback</code>,
              ...)
            </li>
            <li>Class components</li>
            <li>Testing</li>
            <li>Server-side rendering</li>
            <li>Semantic HTML</li>
            <li>Bouwtools & configuratie</li>
            <li>Vergelijkingen met andere frameworks</li>
            <li>Routing</li>
          </ul>
        </section>
      </div>
    </Prose>
  );
}
