import { getDataset } from "./src/dataset/index.ts";
import { foward, predict } from "./src/neural-network/index.ts";
import { round3 } from "./src/utils.ts";

if (import.meta.main) {
  const dataset = getDataset();

  let weigth = 2.5;
  let bias = 30;
  const learningRate = 0.002;

  for (let index = 0; index < 850; index++) {
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

  console.log(`Trained: weigth ${weigth}, bias ${bias}\n`);

  // Test
  dataset.forEach((observation) => {
    const result = predict(observation.celsius, weigth, bias);

    console.log(
      `real: ${observation.celsius}ºC | ${observation.fahrenheit}ºF -> ai: ${
        round3(result)
      } ºF`,
    );
  });
}
