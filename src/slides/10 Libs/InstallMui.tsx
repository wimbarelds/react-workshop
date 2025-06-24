import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';

const imports = `
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
`
  .replace(/\r/g, '')
  .split('\n')
  .filter(Boolean)
  .join('\n');

export function InstallMui() {
  return (
    <Prose>
      <h1>MUI Installeren</h1>
      <p>Voer de volgende commands uit in je terminal</p>
      <code className="px-3 py-2 bg-gray-950 rounded-lg block">
        {'npm install @mui/material @emotion/react @emotion/styled'}
        <br />
        {'npm install @fontsource/roboto'}
      </code>
      <p>
        En zet de volgende regels boven in je <code>main.tsx</code> of <code>main.jsx</code>:
      </p>
      <Code code={imports} />
    </Prose>
  );
}
