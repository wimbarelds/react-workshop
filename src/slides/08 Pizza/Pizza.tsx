import { useEffect, useRef } from 'react';

import { Prose } from '../../shared/Prose';

export function Pizza() {
  return (
    <Prose>
      <h1>Pizza!</h1>
      <p>Hopelijk is de pizza binnen, anders komen we hier straks op terug.</p>
    </Prose>
  );
}

export function PizzaPreview() {
  const elRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = elRef.current!;
    if (!el) return;
    let animationFrame = 0;
    function tick() {
      el.style.setProperty('--hue', `${Math.floor((Date.now() / 3) % 256)}`);
      animationFrame = requestAnimationFrame(tick);
    }
    tick();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <span
      className="font-bold text-xl"
      style={{ color: `oklch(0.75 0.1 var(--hue, 0))` }}
      ref={elRef}
    >
      Pizza!
    </span>
  );
}
