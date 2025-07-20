import { ReactNode } from 'react';

export const fontImports = `
  import '@fontsource/roboto/300.css';
  import '@fontsource/roboto/400.css';
  import '@fontsource/roboto/500.css';
  import '@fontsource/roboto/700.css';
`
  .replace(/\r/g, '')
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean)
  .join('\n');

export const buttonImport = `import { Button } from '@mui/material';`;
export const cardImports = `import { Card, CardHeader, CardContent } from '@mui/material';`;
export const listImports = `import { List, ListItem } from '@mui/material';`;

interface LinkProps {
  children: ReactNode;
}
export const ButtonLink = ({ children }: LinkProps) => (
  <a href="https://mui.com/material-ui/react-button/" target="_blank" rel="noreferrer">
    {children}
  </a>
);

export const CardLink = () => (
  <a href="https://mui.com/material-ui/react-card/" target="_blank" rel="noreferrer">
    {children}
  </a>
);

export const ListLink = () => (
  <a href="https://mui.com/material-ui/react-list/#introduction" target="_blank" rel="noreferrer">
    {children}
  </a>
);
