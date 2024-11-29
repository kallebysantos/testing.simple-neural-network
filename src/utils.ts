export function round6(n: number): number {
  return Math.round(n * 1_000_000) / 1_000_000;
}

export function round3(n: number): number {
  return Math.round(n * 1_000) / 1_000;
}
