export function MyFirstComponent() {
  return (
    <div>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <MySecondComponent />
    </div>
  );
}

function MySecondComponent() {
  return <footer>The Footer</footer>;
}
