import { assertEquals } from "@std/assert";
import { getDataset } from "./src/dataset/index.ts";
import { foward, predict } from "./src/neural-network/index.ts";

if (import.meta.main) {
  const dataset = getDataset();

  let weigth = 2.5;
  let bias = 30;
  const learningRate = 0.002;

  for (let index = 0; index < 1_000; index++) {
    dataset.forEach((observation) => {
      const result = foward(
        weigth,
        observation.celsius,
        observation.fahrenheit,
        learningRate,
        bias,
      );

      weigth = result.newWeight;
      bias = result.newBias;
    });
  }

  console.log(weigth, bias);

  // Test
  dataset.forEach((observation) => {
    const result = predict(observation.celsius, weigth, bias);

    assertEquals(observation.fahrenheit, result);
  });
}
