export function ExpressionsInTSX() {
  const bool1 = true;
  const bool2 = false;
  const bool3 = true;
  const list = ['One', 'Two', 'Three'];

  return (
    <div>
      {bool1 && <p>This will show because bool1 is true</p>}
      {bool2 && <p>This wont show because bool2 is false</p>}
      <p>bool 3 is {bool3 ? 'true' : 'false'}</p>
      <ol>
        {list.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ol>
    </div>
  );
}
