import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import exampleList from './examples/ExampleList.jsx?raw';

export function Lists() {
  return (
    <Prose>
      <h1>Rendering lists</h1>
      <p>The next assignment is to make your list based on data.</p>
      <p>Store a few list items in a variable, and render them.</p>
      <p>Example of what your list might look like:</p>
      <Code code={exampleList} />
    </Prose>
  );
}
