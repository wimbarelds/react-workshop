import { useState } from 'react';
import { Keyboard } from '../../shared/Keyboard';
import { Prose } from '../../shared/Prose';

export function Setup() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  return (
    <>
      <Prose>
        <h1>Setup</h1>
        <h2>Instructies</h2>
        <ul>
          <li>Open VS Code</li>
          <li>
            Open de terminal in VS Code
            <button
              className="ml-2 rounded-sm outline inline-block leading-[1.2em] px-2 py-1/2 hover:bg-white/10"
              onClick={() => setShowKeyboard(true)}
            >
              <code>ctrl + `</code>
            </button>
          </li>
          <li>Ga naar de directory waar je een project wil maken</li>
          <li>
            Run command:{' '}
            <code className="px-2 py-1 bg-gray-950 rounded-lg">npm create vite@latest</code>
          </li>
          <li>Volg de instructies in de terminal</li>
          <li>
            <div>Als het create script in de terminal klaar is</div>
            <ul>
              <li>Open de project-directory in VSCode</li>
              <li>
                Open de terminal in VSCode
                <button
                  className="ml-2 rounded-sm outline inline-block leading-[1.2em] px-2 py-1/2 hover:bg-white/10"
                  onClick={() => setShowKeyboard(true)}
                >
                  <code>ctrl + `</code>
                </button>
              </li>
              <li>
                Installeer de dependencies, run command:{' '}
                <code className="px-2 py-1 bg-gray-950 rounded-lg">npm install</code>
              </li>
              <li>
                Controleer of het gemaakte project werkt, run command:{' '}
                <code className="px-2 py-1 bg-gray-950 rounded-lg">npm run dev</code>
              </li>
            </ul>
          </li>
        </ul>
      </Prose>
      {showKeyboard && (
        <dialog
          open
          className="bg-black/50 text-white inset-0 w-full h-full fixed backdrop-blur-md"
        >
          <div
            className="w-full h-full flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowKeyboard(false);
            }}
          >
            <Keyboard highlight={['Control', '`']} />
          </div>
        </dialog>
      )}
    </>
  );
}
