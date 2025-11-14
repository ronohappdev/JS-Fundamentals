const [, , arg] = process.argv;      // ES6 destructuring
const num = Number(arg);             // Convert argument to number

// ES6 arrow function (recursive)
const factorial = n => 
  n <= 1 ? 1 : n * factorial(n - 1);

// Handle missing or invalid input exactly as required
if (isNaN(num)) {
  console.log(1);
} else {
  console.log(factorial(num));
}
