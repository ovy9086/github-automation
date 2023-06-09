const sum = require("./operations");

test("adds 1+2 to be 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
