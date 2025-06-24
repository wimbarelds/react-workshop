import type { ReactNode } from 'react';

interface CardProps {
  heading: string;
  children: ReactNode;
}

export function Card(props: CardProps) {
  return (
    <div className="card">
      <h1 className="card-title">{props.heading}</h1>
      {props.children}
    </div>
  );
}

export function App() {
  return (
    <main>
      <Card heading="Titel in een Card">
        <p>Dit is een paragraaf die als child wordt meegegeven.</p>
        <p>Maar je kan ook 2 elementen als child meegeven.</p>
      </Card>

      <Card heading="Another card">
        <p>Een andere card met alleen een simpele tekst.</p>
      </Card>
    </main>
  );
}
