import { useState } from 'react';
import { Keyboard } from 'wb-slides';

interface Props {
  text: string;
  keys: string[];
}

export function ShortcutButton({ text, keys }: Props) {
  const [showKeyboard, setShowKeyboard] = useState(false);

  return (
    <>
      <button
        className="ml-2 rounded-sm outline inline-block leading-[1.2em] px-2 py-1/2 hover:bg-white/10"
        onClick={() => setShowKeyboard(true)}
      >
        <code>{text}</code>
      </button>

      {showKeyboard && (
        <dialog
          open
          className="bg-black/50 text-white inset-0 w-full h-full fixed backdrop-blur-md"
        >
          <div
            className="w-full h-full flex items-center justify-center"
            aria-hidden="true"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowKeyboard(false);
            }}
          >
            <Keyboard highlight={keys} />
          </div>
        </dialog>
      )}
    </>
  );
}
