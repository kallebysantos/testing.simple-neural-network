import { assertEquals } from "@std/assert";

import { celsius2Fahrenheit } from "./index.ts";

Deno.test("ºC to ºF conversion", () => {
  const inputs = [1, 15, 28, -5];
  const expects = [33.8, 59, 82.4, 23];

  const results = inputs.map(celsius2Fahrenheit);

  assertEquals(results, expects);
});
