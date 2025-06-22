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
          <li>Go to directory where you keep your projects</li>
          <li>
            Run command:{' '}
            <code className="px-2 py-1 bg-gray-950 rounded-lg">npm create vite@latest</code>
          </li>
          <li>Follow instructions in terminal</li>
          <li>
            <div>Once the terminal script is done</div>
            <ul>
              <li>Open the project-directory in VSCode</li>
              <li>
                Open the terminal again
                <button
                  className="ml-2 rounded-sm outline inline-block leading-[1.2em] px-2 py-1/2 hover:bg-white/10"
                  onClick={() => setShowKeyboard(true)}
                >
                  <code>ctrl + `</code>
                </button>
              </li>
              <li>
                Make sure your project runs, run command:{' '}
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
