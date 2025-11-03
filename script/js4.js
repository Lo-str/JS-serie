// EXERCISE 1: Guess the random number.

// Create a function guessNumberGame that generates a random number between 1 and 10.
// The function should repeatedly prompt the user to guess the number until the correct number is guessed.
// Use a while loop to keep asking the user for input until they guess correctly.
// Provide feedback if the guess is too high or too low.

// function cancel() {
//   let cancel;
//   let input = prompt(message);
//   if (input === null) {
//     game = false;
//   };
//   cancel = parseFloat(input);
// }

function guessNumberGame() {

  let game = confirm("Hej på dig!👋🏾\n\nAre you ready to rumble ? 👾");
  if (game === false) {
    return;
  };

  while (game) {
    const rando = Math.floor(Math.random() * 10) + 1;
    let guess = prompt("Choose a number between 1 and 10 🥸");
    if (guess === null) {
      game = false;
      break;
    } else {
      guess = parseFloat(guess);
    };

    while (guess !== rando) {

      if (Math.abs(rando - guess) <= 2 && guess <= 10 && guess >= 1) {
        guess = prompt("It's getting hot in here 🥵, try again!");
        if (guess === null) {
          game = false;
          break;
        } else {
          guess = parseFloat(guess);
        };
      }
      else if (Math.abs(rando - guess) > 2 && guess <= 10 && guess >= 1) {
        guess = prompt("Freeezing 🥶, try again! ");
        if (guess === null) {
          game = false;
          break;
        } else {
          guess = parseFloat(guess);
        };
      } else {
        guess = prompt("🙅🏾 Oi, looks like your input isn't valid! Your guess must be an absolute number between 1 and 10. Try again:");
        if (guess === null) {
          game = false;
          break;
        } else {
          guess = parseFloat(guess);
        };
      };
    };

    if (!game) break;
    
    const choice = confirm(`Yay! ${guess} was the correct number. You won 🥳\n\nPlay another round?`);

    if (choice === true) {
      continue;
    }
    else if (choice === false) {
      game = false;
    };
  };
};

guessNumberGame();
