import { Prose } from '../../shared/Prose';

export function Recap() {
  return (
    <Prose>
      <h1>Recap: Waar hebben we het over gehad?</h1>
      <p>Een overzicht van alle onderwerpen die we hebben behandeld:</p>

      <h2>🚀 JavaScript Fundamentals</h2>
      <ul>
        <li>
          <strong>Conditionele statements</strong> - if/else voor verschillende acties
        </li>
        <li>
          <strong>Logische operatoren</strong> - &&, ||, ! voor het combineren van condities
        </li>
        <li>
          <strong>TypeScript basics</strong> - Types voor betere code kwaliteit
        </li>
      </ul>

      <h2>⚛️ React Basics</h2>
      <ul>
        <li>
          <strong>React filosofie</strong>, declaratief programmeren
        </li>
        <li>
          <strong>JSX</strong> - JavaScript en HTML samen, {} voor expressies
        </li>
        <li>
          <strong>Componenten</strong> - Herbruikbare UI elementen als functies
        </li>
      </ul>

      <h2>📡 Data & Interactie</h2>
      <ul>
        <li>
          <strong>Props</strong> - Data doorgeven tussen componenten
        </li>
        <li>
          <strong>Children</strong> - Componenten in componenten nesten
        </li>
        <li>
          <strong>Condities & Lijsten</strong> - && voor conditioneel tonen, map() voor arrays
        </li>
      </ul>

      <h2>🔄 State Management - sommige zijn hier gekomen?</h2>
      <ul>
        <li>
          <strong>useState</strong> - Lokale state voor interactieve componenten
        </li>
        <li>
          <strong>Event handlers</strong> - Functies doorgeven als props
        </li>
        <li>
          <strong>useEffect</strong> - Side effects zoals data fetching
        </li>
      </ul>

      <h2>🌐 Data Loading - bijna niemand denk ik?</h2>
      <ul>
        <li>
          <strong>Fetch API</strong> - Data ophalen van servers
        </li>
        <li>
          <strong>Loading states</strong> - UX tijdens het laden van data
        </li>
      </ul>

      <h2>📚 Libraries - iemand?</h2>
      <ul>
        <li>
          <strong>Component libraries</strong> - MUI voor mooie, consistente UI
        </li>
        <li>
          <strong>Herbruikbare componenten</strong> - Buttons, Cards, Lists
        </li>
      </ul>

      <div className="mt-8 p-4 bg-green-900/30 rounded-lg border border-green-500/30">
        <p className="text-lg font-semibold mb-2">🎯 Het belangrijkste:</p>
        <p>
          React is een <strong>functie</strong> die <strong>data</strong> omzet naar{' '}
          <strong>UI</strong>. Alles wat we hebben geleerd helpt ons om die functie beter te
          schrijven!
        </p>
      </div>
    </Prose>
  );
}
