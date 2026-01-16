import { isValidEmail } from "../src/emailValidator";

describe("isValidEmail", () => {
  test("returns false when there is no @", () => {
    expect(isValidEmail("abc")).toBe(false);
  });

  test("returns false when there is nothing before @", () => {
  expect(isValidEmail("@domain.com")).toBe(false);
});
});
