import { Prose } from '../../shared/Prose';

export function StarterProject() {
  return (
    <Prose>
      <h1>Starter project downloaden</h1>
      <p>Bevat de volgende onderdelen:</p>
      <ul>
        <li>
          Project met waar we de vorige keer gebleven waren, zodat iedereen hetzelfde startpunt
          heeft
        </li>
        <li>Prettier voor code formatting</li>
        <li>Iedereen typescript</li>
      </ul>
      <ol>
        <li>
          Download of clone het project:
          <ul>
            <li>
              <strong>Optie A – Download ZIP:</strong>
              <ol>
                <li>Ga naar https://github.com/Timdobbel/react-workshop</li>
                <li>
                  Klik op <em>Code</em> en kies <em>Download ZIP</em>
                </li>
                cd
                <li>Pak het ZIP-bestand uit op een plek naar keuze</li>
              </ol>
            </li>
            <li>
              <strong>Optie B – Clone met git:</strong>
              <code className="px-3 py-2 bg-gray-950 rounded-lg block">
                git clone https://github.com/Timdobbel/react-workshop.git
              </code>
            </li>
          </ul>
        </li>
        <li>
          Navigeer naar de projectmap:
          <code className="px-3 py-2 bg-gray-950 rounded-lg block">cd react-workshop</code>
        </li>
        <li>
          Installeer de dependencies:
          <code className="px-3 py-2 bg-gray-950 rounded-lg block">npm install</code>
        </li>
        <li>
          Start de development server:
          <code className="px-3 py-2 bg-gray-950 rounded-lg block">npm run dev</code>
        </li>
        <li>Open je browser en ga naar http://localhost:5173</li>
        <li>Controleer of "format on save" werkt</li>
      </ol>
    </Prose>
  );
}
