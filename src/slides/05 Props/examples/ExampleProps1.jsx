export function Person(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
    </div>
  );
}

export function People() {
  return (
    <div>
      <Person name="Wim" age={39} role="Trainer" />
      <Person name="Harm" age="unknown" role="Helper?" />
      <Person name="Dennis" age="unknown" role="Trainee" />
    </div>
  );
}
