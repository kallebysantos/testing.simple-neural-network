function predict(input: number, weight: number, bias: number): number {
  return input * weight + bias;
}

function getLoss(prediction: number, expected: number) {
}

export function meanSquaredError(predicts: number[], actuals: number[]) {
  if (predicts.length !== actuals.length) {
    throw RangeError(
      "different size length for 'predicts' and 'expects'. Should be same length!",
    );
  }

  const totalSum = predicts.reduce((total, current, idx) =>
    total + applySquaredError(current, actuals[idx])
  );

  return totalSum / predicts.length;
}

export function applySquaredError(prediction: number, actual: number) {
  return (actual - prediction) ** 2;
}
