// EXERCISE 3: Calculate the sum of even numbers in the array
// Create a function sumEvenNumbers that accepts an array as an argument.
// Use a for loop to iterate through the array and calculate the sum of the even numbers.
// Return the sum of the even numbers.

function sumEvenNumbers(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  };
  return sum;
}

console.log(sumEvenNumbers([2, 5, 6, 4]));
