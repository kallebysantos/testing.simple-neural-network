export function celsius2Fahrenheit(celsius: number): number {
  return celsius * 1.8 + 32;
}

export function getDataset() {
  const inputs = [1, 15, 28, -5];

  return inputs.map((celsius) => ({
    celsius,
    fahrenheit: celsius2Fahrenheit(celsius),
  }));
}
