import { Prose } from '../../shared/Prose';
import Code from '../../shared/Code';
import exampleChildrenJsx from './examples/ExampleChildren.jsx?raw';
import exampleChildrenTsx from './examples/ExampleChildren.tsx?raw';
import { Checkbox } from '../../shared/Checkbox';
import { useState } from 'react';

export function Children() {
  const [typescript, setTypescript] = useState(false);
  return (
    <Prose>
      <h1>De "children" prop</h1>
      <p>
        Er is een speciale "prop", namelijk <code>children</code>. Deze kan je zo meegeven:
      </p>
      <Checkbox show={typescript} setShow={setTypescript}>
        Typescript
      </Checkbox>
      <Code code={typescript ? exampleChildrenTsx : exampleChildrenJsx} />
    </Prose>
  );
}
