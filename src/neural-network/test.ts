import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

import { applySquaredError, getLoss, meanSquaredError } from "./index.ts";
import { round3, round6 } from "../utils.ts";

describe("validate 'Squared Error'", () => {
  const inputs = {
    actuals: [-0.3, -0.2, 50],
    predicts: [0.2, -0.8, 35],
  };

  const expects = [0.25, 0.36, 225];

  it("apply 'Squared Error' individualy", () => {
    expects.forEach((expected, idx) => {
      const result = applySquaredError(
        inputs.predicts[idx],
        inputs.actuals[idx],
      );

      expect(round6(result)).toBe(expected);
    });
  });

  it("apply 'Mean Squared Error'", () => {
    const result = meanSquaredError(inputs.predicts, inputs.actuals);

    const expected = 75.187;

    expect(round3(result)).toBe(expected);
  });
});

describe("validate 'Loss function'", () => {
  const inputs = {
    inputValue: -10,
    actuals: 14,
    predicts: [16, 15.2, 14.72],
    weigth: [1.6, 1.68, 1.728],
    learningRate: 0.002,
  };

  const expects = [1.68, 1.728, 1.757];

  it("should get next weigth", () => {
    expects.forEach((expected, idx) => {
      const result = getLoss(
        inputs.weigth[idx],
        inputs.inputValue,
        inputs.predicts[idx],
        inputs.actuals,
        inputs.learningRate,
      );

      expect(round3(result)).toBe(expected);
    });
  });
});
