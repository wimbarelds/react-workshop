import { useMemo, useState } from 'react';
import { Prose } from '../../shared/Prose';
import { useTopics } from '../../slideStore';
import { Arrow } from '../../svg/Arrow';
import { Checkbox } from '../../shared/Checkbox';

function formatTime(date: Date) {
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
}

export function Agenda() {
  const [showTimes, setShowTimes] = useState(false);
  const topics = useTopics();
  const items = useMemo(() => {
    const cur = new Date();
    cur.setHours(16, 0, 0, 0);
    return topics.map(([topic, duration]) => {
      const from = formatTime(cur);
      cur.setMinutes(cur.getMinutes() + duration);
      const to = formatTime(cur);
      return {
        from,
        to,
        topic,
        duration,
      };
    });
  }, [topics]);

  return (
    <>
      <Prose>
        <h1 className="mb-0">Agenda</h1>
        <Checkbox show={showTimes} setShow={setShowTimes}>
          Laat tijden zien
        </Checkbox>
        <ul>
          {items.map(({ topic, duration, from, to }, index) => {
            if (!duration) {
              return (
                <li key={topic} className="italic">
                  {topic} - Als er tijd over is
                </li>
              );
            }
            if (!showTimes)
              return (
                <li key={topic}>
                  {duration} min - <strong>{topic}</strong>{' '}
                  {index === 0 && (
                    <div className="inline-flex gap-1 ml-2 items-baseline text-sm text-white/75">
                      <Arrow className="-rotate-90" width={9} height={6} thickness={2} py={2} /> You
                      are here
                    </div>
                  )}
                </li>
              );

            return (
              <li key={topic}>
                <span className="font-mono">
                  {from} - {to}
                </span>{' '}
                - <strong>{topic}</strong>
              </li>
            );
          })}
        </ul>
      </Prose>
    </>
  );
}
