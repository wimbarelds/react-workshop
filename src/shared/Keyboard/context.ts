import { createContext, useContext } from 'react';
import type { KeyboardContext } from './types';
import { defaultBaseKeySize } from './consts';

const KeyboardContext = createContext<KeyboardContext>({ baseKeySize: defaultBaseKeySize });
type KeyboardContextResult = KeyboardContext & { baseKeySize: number };

export const KeyboardContextProvider = KeyboardContext.Provider;

export const useKeyboardContext = () => useContext(KeyboardContext) as KeyboardContextResult;
