interface SizeProps {
  width?: number;
  height?: number;
}

function getSize(size: SizeProps) {
  const width = size.width ?? size.height ?? 24;
  const height = size.height ?? size.width ?? 24;
  return { width, height };
}

interface Props extends SizeProps {
  className?: string;
  px?: number;
  py?: number;
  thickness?: number;
}
export function Arrow({ thickness = 4, px = 0, py = 0, className, ...size }: Props) {
  const { width, height } = getSize(size);
  const offset = thickness / 2;

  const iWidth = width - thickness;
  const iHeight = height - thickness;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width + 2 * px} ${height + 2 * py}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={thickness}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ width: width + 2 * px, height: height + 2 * py }}
    >
      <path
        d={`
          M ${px + offset} ${py + height - offset}
          l ${iWidth / 2} -${iHeight}
          l ${iWidth / 2} ${iHeight}
        `}
      />
    </svg>
  );
}
