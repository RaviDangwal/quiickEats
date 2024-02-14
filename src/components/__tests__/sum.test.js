import { sum } from "../sum";

test("sum of function should be calculated", () => {
  const result = sum(4, 6);

  //assertion
  expect(result).toBe(10);
});
