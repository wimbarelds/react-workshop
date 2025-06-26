import { Prose } from '../../shared/Prose';

export function WhatLibs() {
  return (
    <Prose>
      <h1>Component Library</h1>
      <p>
        In frontend-development wordt veel gebruik gemaakt van libraries. React zelf is ook een
        library, en Pega's <code>{'@pega/react-sdk-components'}</code> is ook een library.
      </p>
      <p>
        Die libraries gebruiken dan bijna altijd ook weer andere libraries. Pega's SDK components
        maken bijvoorbeeld gebruik van{' '}
        <a href="https://mui.com/material-ui/api/list/" target="_blank">
          MUI
        </a>
        , een van de populairste componenten libraries.
      </p>
      <p>
        Componenten libraries maken het makkelijker om (React) apps te maken die er goed uit zien,
        en die een consistente visuele stijl hebben.
      </p>
      <p>
        Om vooral de Pega developers daar al een klein beetje op voor te bereiden gaan we hier nu
        ook een paar van die componenten gebruiken.
      </p>
    </Prose>
  );
}
