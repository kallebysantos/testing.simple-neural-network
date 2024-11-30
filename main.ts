import { getDataset } from "./src/dataset/index.ts";
import { foward } from "./src/neural-network/index.ts";

if (import.meta.main) {
  const dataset = getDataset();

  let weigth = 1.6;
  const bias = 32;
  const learningRate = 0.002;

  for (let index = 0; index < 20; index++) {
    const result = foward(
      weigth,
      -10,
      14,
      learningRate,
      bias,
    );

    console.log(index, result);

    weigth = result.newWeight;
  }

  //console.log(dataset);
}
