import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';

const imports = `import { Button } from '@mui/material';`;

export function UsingButton() {
  return (
    <Prose>
      <h1>
        Using <code>{'<Button>'}</code>
      </h1>
      <p>De volgende: Button.</p>
      <p>
        Deze is simpel, en er is zelfs simpele{' '}
        <a href="https://mui.com/material-ui/react-button/" target="_blank" rel="noreferrer">
          documentatie
        </a>
        !
      </p>
      <Code code={imports} />
    </Prose>
  );
}
