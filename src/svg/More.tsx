import { useMemo } from 'react';

interface Props {
  className?: string;
  numDots?: number;
  radius?: number;
  gap?: number;
  px?: number;
  py?: number;
}

export function More({ radius = 2, gap = 6, px = 0, py = 0, numDots = 3, className }: Props) {
  const width = px * 2 + radius * 2 * numDots + gap * (numDots - 1);
  const height = py * 2 + radius * 2;

  const centerY = height / 2;

  const dotArr = useMemo(() => {
    return new Array(numDots).fill(0).map((_, i) => {
      return px + radius + i * (radius * 2 + gap);
    });
  }, [gap, numDots, px, radius]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      fill="currentColor"
      className={className}
      style={{ width, height }}
    >
      {dotArr.map((cx) => (
        <circle key={cx} cx={cx} cy={centerY} r={radius} />
      ))}
    </svg>
  );
}
