// Define the function add(a, b)
function add(a, b) {
  return a + b;
}

// Get command-line arguments and convert to integers
const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

// Print the result using the add function
console.log(add(arg1, arg2));