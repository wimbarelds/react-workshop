import { Prose } from '../../shared/Prose';

export function Welkom() {
  const url = 'https://wimbarelds.github.io/react-workshop/';
  return (
    <Prose>
      <h1>Welkom</h1>
      <h2>Wie ben ik?</h2>
      <ul>
        <li>Wim Barelds</li>
        <li>JS Roots</li>
        <li>Frontend specialist</li>
        <li>Pega React SDK expert</li>
      </ul>
      <h2>Workshop React</h2>
      <p className="text-2xl">
        <strong>Slides:</strong>{' '}
        <a href={url} target="_blank" className="font-mono" rel="noreferrer">
          {url}
        </a>
      </p>
      <p>
        <em>Open de slides ook even lokaal zodat je later wat kan copy-pasten.</em>
      </p>
    </Prose>
  );
}
