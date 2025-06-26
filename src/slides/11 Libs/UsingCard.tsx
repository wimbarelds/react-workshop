import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';

const imports = `import { Card, CardHeader, CardContent } from '@mui/material';`;

export function UsingCard() {
  return (
    <Prose>
      <h1>
        Using <code>{'<Card>'}</code>
      </h1>
      <p>Nu MUI geïnstalleerd is kunnen we MUI componenten gebruiken.</p>
      <p>
        De eerste die we gaan gebruiken is het{' '}
        <a href="https://mui.com/material-ui/react-card/" target="_blank">
          Card
        </a>{' '}
        component.
      </p>
      <p>Helaas zijn de voorbeelden in MUI's documentatie een beetje over-complicated ☹</p>
      <p>
        Gebruik voor nu maar de Card, CardHeader en CardContent, en voeg die toe aan je
        <code>{' TaskList '}</code>
        component.
      </p>
      <Code code={imports} />
    </Prose>
  );
}
