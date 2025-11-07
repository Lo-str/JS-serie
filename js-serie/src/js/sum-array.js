// Calculate the sum of even numbers in the array

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
