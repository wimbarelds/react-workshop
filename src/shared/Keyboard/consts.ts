export const defaultBaseKeySize = 3.9;

export const widths = {
  // Top Row
  Backspace: 2,
  // Tab and Caps Row
  Tab: 1.5,
  ['\\']: 1.5, // The '\' key above Enter
  ['Caps Lock']: 1.75,
  Enter: 2.25,
  // Shift Row
  Shift: 2.25, // Left Shift
  rShift: 2.75, // Right Shift
  // Bottom (Control) Row
  Control: 1.25,
  Win: 1.25, // Windows or Command key
  Alt: 1.25,
  Space: 6.25,
  rAlt: 1.25,
  Fn: 1.25,
  Ctx: 1.25, // Context Menu key
  rControl: 1.25,
  // Numpad
  kp0: 2,
} as const satisfies Readonly<Record<string, number>>;
