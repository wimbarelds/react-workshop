import { Prose } from '../../shared/Prose';
import Code from '../../shared/Code';
import TsBasic from './examples/TypescriptBasicTypes.ts?raw';
import TsInterface from './examples/TypescriptInterface.ts?raw';

export function Typescript() {
  return (
    <Prose>
      <h1>TypeScript</h1>
      <p>
        TypeScript is een strikte syntactische superset van JavaScript en voegt optionele statische
        typering toe aan de taal. Het is ontworpen voor de ontwikkeling van grote applicaties en
        wordt gecompileerd naar JavaScript. Aangezien TypeScript een superset is van JavaScript,
        zijn bestaande JavaScript-programma's ook geldige TypeScript-programma's.
      </p>

      <h2>Basistypen</h2>
      <p>TypeScript biedt statische typering. Hier zijn enkele van de basistypen:</p>
      <Code code={TsBasic} />

      <h2>Interfaces</h2>
      <p>
        Interfaces zijn een krachtige manier om contracten binnen je code te definiëren, evenals
        contracten met code buiten je project.
      </p>
      <Code code={TsInterface} />
    </Prose>
  );
}
