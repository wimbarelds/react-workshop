import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';

const imports = `import { List, ListItem } from '@mui/material';`;

export function UsingList() {
  return (
    <Prose>
      <h1>
        Using <code>{'<List>'}</code>
      </h1>
      <p>De volgende: List en ListItem.</p>
      <p>
        Ook hier is de{' '}
        <a href="https://mui.com/material-ui/react-list/#introduction" target="_blank">
          documentatie
        </a>{' '}
        weer flink over-complicated. Maar ik denk dat jullie hier ook wel uitkomen.
      </p>
      <Code code={imports} />
    </Prose>
  );
}
