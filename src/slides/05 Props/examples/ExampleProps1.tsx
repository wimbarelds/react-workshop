interface PersonProps {
  name: string;
  age?: number;
  role: string;
}

export function Person(props: PersonProps) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age ?? 'unknown'}</p>
      <p>Role: {props.role}</p>
    </div>
  );
}

export function People() {
  return (
    <div>
      <Person name="Wim" age={39} role="Trainer" />
      <Person name="Harm" role="Helper?" />
      <Person name="Dennis" role="Trainee" />
    </div>
  );
}
