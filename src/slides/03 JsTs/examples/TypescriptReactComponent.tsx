interface Props {
  titel: string;
  items: string[];
}

const LijstComponent: React.FC<Props> = ({ titel, items }) => (
  <div>
    <h1>{titel}</h1>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
