import { Prose, useSlides } from 'wb-slides';

export function Agenda() {
  const topics = useSlides();

  return (
    <>
      <Prose>
        <h1>Agenda</h1>
        <ul>
          {topics.map(({ title }, index) => {
            const here = index === 0;
            return (
              <li key={title} className="text-xl">
                <strong>{title}</strong> {here && <span className="text-xs">(You are here)</span>}
              </li>
            );
          })}
        </ul>
      </Prose>
    </>
  );
}
