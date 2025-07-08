import { useState } from 'react';

import { Checkbox } from '../../shared/Checkbox';
import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import exampleProps1Jsx from './examples/ExampleProps1.jsx?raw';
import exampleProps1Tsx from './examples/ExampleProps1.tsx?raw';

export function Props() {
  const [typescript, setTypescript] = useState(false);
  return (
    <Prose>
      <h1>Props: Data doorgeven</h1>
      <p>
        Net als dat we in JSX aan HTML attributen kunnen meegeven (ie:{' '}
        <code>{'<a href="...">'}</code>), kunnen we ook eigenschappen meegeven aan componenten. Bij
        componenten heet dit <code>"props"</code>.
      </p>
      <Checkbox show={typescript} setShow={setTypescript}>
        Typescript
      </Checkbox>
      <Code code={typescript ? exampleProps1Tsx : exampleProps1Jsx} />
    </Prose>
  );
}
