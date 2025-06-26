import { Prose } from '../../shared/Prose';

export function UnderTheHood() {
  return (
    <Prose>
      <h1>Under the hood</h1>
      <p>Hoe werkt React onder de motorkap?</p>
      <ul>
        <li>Reminder: Componenten zijn functies</li>
        <li>
          Elke keer dat er een stukje state in een component verandert, dan wordt dat component, en
          alle sub-componenten, opnieuw gerenderd (dan worden dus alle functies opnieuw uitgevoerd)
        </li>
        <li>
          React zorgt dat hooks 'weten' in welk component ze zijn uitgevoerd, en kunnen daarom hun
          "state" onthouden.
        </li>
        <li>
          De functie die je meegeeft aan o.a. useEffect wordt gecached op basis van de dependency
          array. Dat betekent dat, als je een stukje state update dat niet in de dependency array
          staat, het effect mogelijk nog een verouderde waarde voor dat stukje state heeft.
        </li>
      </ul>
    </Prose>
  );
}
