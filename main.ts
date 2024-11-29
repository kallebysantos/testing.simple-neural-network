import { getDataset } from "./src/dataset/index.ts";

if (import.meta.main) {
  const dataset = getDataset();

  console.log(dataset);
}
