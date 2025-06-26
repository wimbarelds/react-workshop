import { Prose } from '../../shared/Prose';

export function AddTask() {
  return (
    <Prose>
      <h1>Taken toevoegen</h1>
      <p>We willen hier ook taken aan de lijst kunnen toevoegen. Hoe doen we dat?</p>
      <p>Allereerst, onze lijst met taken moet ook "state" worden.</p>
      <p>
        Daarnaast gaan we een text-input (met daarbij horende state) en een button nodig zijn. Als
        je op die button klikt, moet de ingevulde tekst aan de takenlijst worden toegevoegd. Let op:
        State is immutable!
      </p>
    </Prose>
  );
}
