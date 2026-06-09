/**
 * Unit tests for calculator.js
 *
 * Covers all seven operations:
 *   - add        (Addition)
 *   - subtract   (Subtraction)
 *   - multiply   (Multiplication)
 *   - divide     (Division)
 *   - modulo     (Modulo / Remainder)
 *   - power      (Exponentiation)
 *   - squareRoot (Square Root)
 *
 * Includes example operations from the images (2+3, 10-4, 45*2, 20/5, 5%2, 2^3, √16)
 * and edge cases such as division by zero, negatives, decimals, and square root of negative numbers.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

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

// ─── Modulo ──────────────────────────────────────────────────────────────────
describe("modulo", () => {
  test("5 % 2 = 1 (image example)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("returns remainder for large numbers", () => {
    expect(modulo(100, 7)).toBe(2);
  });

  test("modulo with a negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("modulo with a negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("modulo with decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });
});

// ─── Power ───────────────────────────────────────────────────────────────────
describe("power", () => {
  test("2 ^ 3 = 8 (image example)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises a number to the power of 1 (identity)", () => {
    expect(power(99, 1)).toBe(99);
  });

  test("raises a number to the power of 0 (always 1)", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises a negative base to an even exponent (positive result)", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("raises a negative base to an odd exponent (negative result)", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("raises a decimal base to a power", () => {
    expect(power(2.5, 2)).toBeCloseTo(6.25);
  });

  test("raises a number to a fractional exponent (square root via power)", () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });
});

// ─── Square Root ─────────────────────────────────────────────────────────────
describe("squareRoot", () => {
  test("√16 = 4 (image example)", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("square root of 25 = 5", () => {
    expect(squareRoot(25)).toBe(5);
  });

  test("square root of 2 (irrational number)", () => {
    expect(squareRoot(2)).toBeCloseTo(1.414);
  });

  test("square root of 0 = 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("square root of 1 = 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("square root of a negative number returns an error message", () => {
    expect(squareRoot(-9)).toBe("Error: Cannot take the square root of a negative number.");
  });

  test("square root of a negative decimal returns an error message", () => {
    expect(squareRoot(-0.5)).toBe("Error: Cannot take the square root of a negative number.");
  });
});
