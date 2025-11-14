const [, , arg] = process.argv;      
const num = Number(arg);             

// ES6 arrow function (recursive)
const factorial = n => 
  n <= 1 ? 1 : n * factorial(n - 1);

// Handle missing or invalid input exactly as required
if (isNaN(num)) {
  console.log(1);
} else {
  console.log(factorial(num));
}
