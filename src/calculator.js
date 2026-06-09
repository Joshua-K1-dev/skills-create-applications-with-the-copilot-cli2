/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition: returns the sum of two numbers
 *   subtract   - Subtraction: returns the difference of two numbers
 *   multiply   - Multiplication: returns the product of two numbers
 *   divide     - Division: returns the quotient of two numbers (handles division by zero)
 *   modulo     - Modulo: returns the remainder of a divided by b
 *   power      - Exponentiation: returns base raised to the exponent
 *   squareRoot - Square Root: returns the square root of n (handles negative numbers)
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
 *   node calculator.js modulo 10 3
 *   node calculator.js power 2 8
 *   node calculator.js squareRoot 25
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Returns an error message if b is zero to avoid division by zero
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
function modulo(a, b) {
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n
// Returns an error message if n is negative
function squareRoot(n) {
  if (n < 0) {
    return "Error: Cannot take the square root of a negative number.";
  }
  return Math.sqrt(n);
}

// Export functions for use in tests and other modules
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Only run CLI logic when executed directly (not when required as a module)
if (require.main === module) {
  const [, , operation, num1, num2] = process.argv;

  const isSquareRoot = operation === "squareRoot";
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (!operation || isNaN(a) || (!isSquareRoot && isNaN(b))) {
    console.log("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]");
    process.exit(1);
  }

  let result;
  switch (operation) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
      break;
    case "modulo":
      result = modulo(a, b);
      break;
    case "power":
      result = power(a, b);
      break;
    case "squareRoot":
      result = squareRoot(a);
      break;
    default:
      console.log(`Unknown operation: "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareRoot.`);
      process.exit(1);
  }

  console.log(`Result: ${result}`);
}
