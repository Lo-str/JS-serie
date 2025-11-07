// Create an array of random numbers

function generateRandomArray(length) {
  const array = [];

  for (let i = 0; i < length; i++) {
    let numbers = Math.floor(Math.random() * 100) + 1;
    array.push(numbers);
  };
  return array;
}

console.log(generateRandomArray(50));
