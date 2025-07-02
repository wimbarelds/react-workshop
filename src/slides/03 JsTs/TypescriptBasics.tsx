import { Prose } from '../../shared/Prose';
import Code from '../../shared/Code';
import TsVariabelen from './examples/TypescriptVariabelen.ts?raw';
import TsFuncties from './examples/TypescriptFuncties.ts?raw';
import TsArrays from './examples/TypescriptArrays.ts?raw';
import TsObjecten from './examples/TypescriptObjecten.ts?raw';
import TsInterfacesUitgebreid from './examples/TypescriptInterfacesUitgebreid.ts?raw';
import TsReactComponent from './examples/TypescriptReactComponent.tsx?raw';

export function TypescriptBasics() {
  return (
    <Prose>
      <h1>📘 TypeScript Basics voor Beginners</h1>

      <h2>🖥️ Wat is TypeScript?</h2>
      <ul>
        <li>
          <strong>TypeScript</strong> is een superset van JavaScript met extra mogelijkheden, zoals
          types.
        </li>
        <li>Het helpt fouten te voorkomen door je code beter voorspelbaar te maken.</li>
      </ul>

      <h2>📜 Basisconcepten</h2>

      <h3>1. Variabelen</h3>
      <Code code={TsVariabelen} />

      <h3>2. Functies</h3>
      <Code code={TsFuncties} />

      <h3>3. Arrays</h3>
      <Code code={TsArrays} />

      <h3>4. Objecten</h3>
      <Code code={TsObjecten} />

      <h2>🧰 Interfaces</h2>
      <ul>
        <li>
          <strong>Interfaces</strong> definiëren hoe een object moet worden gestructureerd.
        </li>
        <li>Ze helpen om consistente objectstructuren te maken.</li>
      </ul>

      <h3>Gebruik van Interfaces</h3>
      <Code code={TsInterfacesUitgebreid} />

      <h2>🛠️ Toepassen in Project</h2>
      <ol>
        <li>
          <strong>Definieer types voor je componenten</strong>: Gebruik interfaces om props en state
          te typeren.
        </li>
        <li>
          <strong>Consistency</strong>: Zorg ervoor dat je gegevens consistent en voorspelbaar zijn.
        </li>
        <li>
          <strong>Type Veiligheid</strong>: Voorkom runtime fouten door vooraf typefouten te
          ontdekken.
        </li>
      </ol>

      <h3>✨ Voorbeeld in een React Component</h3>
      <Code code={TsReactComponent} />
    </Prose>
  );
}
