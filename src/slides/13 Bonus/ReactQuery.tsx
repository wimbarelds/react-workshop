import { Prose } from '../../shared/Prose';

export function ReactQuery() {
  return (
    <Prose>
      <h1>React Query</h1>
      <p>Bij het laden van data kan eigenlijk best veel fout gaan.</p>
      <p>
        Daarom wordt in veel React apps iets als{' '}
        <a
          href="https://tanstack.com/query/latest/docs/framework/react/examples/simple"
          target="_blank"
          rel="noreferrer"
        >
          React Query
        </a>{' '}
        gebruikt.
      </p>
    </Prose>
  );
}
