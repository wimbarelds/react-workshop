import { useState } from 'react';

export function StateExample1() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show && <p>Show is true!</p>}
      <button onClick={() => setShow(true)}>Aan</button>
      <button onClick={() => setShow(false)}>Uit</button>
    </div>
  );
}
