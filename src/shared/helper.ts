export function bound(
  n: number,
  { min = 0, max = Number.MAX_SAFE_INTEGER }: { min?: number; max?: number },
) {
  return Math.min(max, Math.max(min, n));
}
