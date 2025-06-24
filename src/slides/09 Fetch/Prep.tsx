import { useEffect, useState } from 'react';
import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';

export function PrepareDataLoading() {
  const [json, setJson] = useState('');
  useEffect(() => {
    fetch('./db.json')
      .then((res) => res.text())
      .then(setJson);
  }, []);

  return (
    <Prose>
      <h1>Mini-party</h1>
      <p>
        Met die laatste slide hebben we de belangrijkste onderwerpen gehad. Alles wat hierna nog
        komt is mooi meegenomen.
      </p>
      <p>Nu gaan we naar data-loading. Om dat de doen een klein beetje voorbereiding.</p>
      <h2>Download, of copy paste</h2>
      <code>db.json</code> <Code code={json} />
      <a href="./db.json" download="db.json" target="_blank" children="Download" />
      <p>En zet het bestand in de root van je project.</p>
      <p>
        Voer daarna (in een losse terminal) uit:{' '}
        <code className="px-2 py-1 bg-gray-950 rounded-lg">npx json-server db.json</code>
      </p>
      <p>Je zou zo iets moeten zien:</p>
      <img className="contrast-200 rounded-xl" src="json-server.png" />
    </Prose>
  );
}
