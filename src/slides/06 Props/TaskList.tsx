import { Prose } from '../../shared/Prose';

export function TaskList() {
  return (
    <Prose>
      <h1>Maak een takenlijst</h1>
      <p>We weten nu hoe je eigenschappen en children aan een component meegeeft.</p>
      <h2>Opdracht:</h2>
      <p>
        Maak een <code>TakenLijst</code> component en een <code>Taak</code> component.
      </p>
      <p>
        Zorg dat het Taak component ook een <code>"completed"</code> prop heeft. En maak daarna een
        lijst met een klein aantal taken.
      </p>
    </Prose>
  );
}
