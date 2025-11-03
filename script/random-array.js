// EXERCISE 2: Create an array of random numbers
// Create a function generateRandomArray that accepts one argument: length(the length of the array).
// Inside the function, use a for loop to generate an array of random numbers between 1 and 100.
// Return the array from the function.

function generateRandomArray(length) {
  const array = [];

  for (let i = 0; i < length; i++) {
    let numbers = Math.floor(Math.random() * 100) + 1;
    array.push(numbers);
  };
  return array;
}

console.log(generateRandomArray(50));
