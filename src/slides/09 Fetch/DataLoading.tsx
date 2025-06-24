import Code from '../../shared/Code';
import { Prose } from '../../shared/Prose';
import fetchExample from './examples/fetchExample.js?raw';

export function DataLoading() {
  return (
    <Prose>
      <h1>Data Loading</h1>
      <p>We hebben nu een server die ons mock-data (tasks) geeft.</p>
      <p>
        <strong>Opdracht: </strong> De taken van de server ophalen. Hiervoor gebruik je{' '}
        <code>useEffect</code> en <code>fetch</code>
      </p>
      <Code code={fetchExample} />
      <p>
        <em>Bonus:</em> Je kan hier ook al direct loading-state toevoegen. Maar om dat ook
        daadwerkelijk te zien moet je waarschijnlijk even via dev-tools een traag netwerk emuleren.
      </p>
    </Prose>
  );
}
