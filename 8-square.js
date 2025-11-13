const arg = process.argv[2];
const size = Number(arg);

if (isNaN(size)) {
  console.log('Missing size');
} else if (size > 0) {
  let i = 0;
  while (i < size) {
    console.log('X'.repeat(size));
    i++;
  }
}