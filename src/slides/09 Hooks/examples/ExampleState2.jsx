import { useState } from 'react';

export function StateExample2() {
  const [name, setName] = useState('');

  return (
    <div>
      <p>My name is {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
