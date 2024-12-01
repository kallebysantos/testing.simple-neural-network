export function predict(input: number, weight: number, bias: number): number {
  return input * weight + bias;
}

export function foward(
  weight: number,
  input: number,
  actual: number,
  learningRate: number,
  bias: number,
) {
  const prediction = predict(input, weight, bias);
  const newWeight = getLoss(weight, input, prediction, actual, learningRate);

  const newBias = bias -
    (learningRate * applySquaredErrorDerivate(prediction, actual));

  return {
    prediction,
    newWeight,
    newBias,
  };
}

export function getLoss(
  weight: number,
  input: number,
  prediction: number,
  actual: number,
  learningRate: number,
) {
  const error = learningRate * input *
    applySquaredErrorDerivate(prediction, actual);

  return weight - error;
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

export function applySquaredErrorDerivate(prediction: number, actual: number) {
  // just switch the signs
  return -2 * (actual - prediction);
}
