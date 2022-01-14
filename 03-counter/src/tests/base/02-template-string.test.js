import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string.js";
describe("Template string test", () => {
  test("Method getSaludo returns text and name", () => {
    const name = "Fernando";
    const grettings = getSaludo(name);
    expect(grettings).toBe("Hola " + name);
  });
  test("Method getSaludo returns default value", () => {
    const grettings = getSaludo();
    expect(grettings).toBe("Hola Carlos");
  });
});
