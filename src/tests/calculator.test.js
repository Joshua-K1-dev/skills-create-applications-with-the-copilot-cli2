/**
 * Unit tests for calculator.js
 *
 * Covers all four basic operations:
 *   - add      (Addition)
 *   - subtract (Subtraction)
 *   - multiply (Multiplication)
 *   - divide   (Division)
 *
 * Includes example operations from the image (2+3, 10-4, 45*2, 20/5)
 * and edge cases such as division by zero, negatives, and decimals.
 */

const { add, subtract, multiply, divide } = require("../calculator");

// ─── Addition ────────────────────────────────────────────────────────────────
describe("add", () => {
  test("2 + 3 = 5 (image example)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds two negative numbers", () => {
    expect(add(-5, -7)).toBe(-12);
  });

  test("adds zero to a number", () => {
    expect(add(42, 0)).toBe(42);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe("subtract", () => {
  test("10 - 4 = 6 (image example)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test("subtracts a larger number from a smaller one (negative result)", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts a negative number", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(15, 0)).toBe(15);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe("multiply", () => {
  test("45 * 2 = 90 (image example)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  test("multiplies two negative numbers (positive result)", () => {
    expect(multiply(-5, -6)).toBe(30);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies by one (identity)", () => {
    expect(multiply(99, 1)).toBe(99);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ─── Division ────────────────────────────────────────────────────────────────
describe("divide", () => {
  test("20 / 5 = 4 (image example)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(15, 3)).toBe(5);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(10, 3)).toBeCloseTo(3.333);
  });

  test("divides a negative number", () => {
    expect(divide(-20, 4)).toBe(-5);
  });

  test("divides zero by a number (result is zero)", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("division by zero returns an error message", () => {
    expect(divide(10, 0)).toBe("Error: Division by zero is not allowed.");
  });

  test("division by zero with negative numerator returns an error message", () => {
    expect(divide(-7, 0)).toBe("Error: Division by zero is not allowed.");
  });
});
