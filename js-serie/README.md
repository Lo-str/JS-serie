JS1: Introduction to JavaScript
JS2: Keywords, String Methods & Parse
JS3: Conditional Statements & Functions


====================  INTRO  ====================

  Create a project for your JavaScript assignments. Make sure that you use proper project structure and connect it to a new GitHub repository. Complete the three exercises below and sent the link to the repository to your teacher through the assignment document when you are done.

  EXERCISE 1:
  - Print "Hello, World!"
  - Write a simple JavaScript program that prints "Hello, World!" to the console.
  - This exercise will help you understand how to use the console.log() function.

  EXERCISE 2:
  - Create variables and use them
  - Create three variables: one to store your name, one for your age, and one for your favorite color.
  - Then, use console.log() to print a sentence that includes all three variables.

  EXERCISE 3:
  Basic arithmetic operations

  - Write a JavaScript program that performs basic arithmetic operations: addition, subtraction, multiplication, and division. (create 4 console.logs)
  - Create two variables with numbers, and then use these variables to perform the operations in your console.logs. If you have done this correct, you should get different results on each console.log


====================  PRICE TAG  ====================

  Create a simple program that returns a price tag from the user, then give them a discount of 10 percent

      Task:
      1. Ask the user to enter a price tag using prompt(), for example: $49.99
      2. Convert the input from string to number
      3. Reduce the price by 10 percent
      4. Print out the new price in a template literal using console.log(), for example: 'Your new price is: $44.99'

  Just a heads up: The dollar-sign will be included when entering a price tag, so you have to find a way to remove it before converting it into a number.

  Quick Tip: Don’t do all the functionality on one single line. Declare a variable for each task and store the value that you get from each step. That way you can reuse your variables for the next task.


====================  PASSWORD  ====================

  Write a isValidPassword function
  It accepts 2 arguments: password and username

  Password must:
  - be at least 8 characters
  - cannot contain spaces
  - cannot contain the username

  If all requirements are met, return true, otherwise return false


====================  GUESSING GAME  ====================

  EXERCISE 1: Guess the random number.

  Create a function guessNumberGame that generates a random number between 1 and 10.
  The function should repeatedly prompt the user to guess the number until the correct number is guessed.
  Use a while loop to keep asking the user for input until they guess correctly.
  Provide feedback if the guess is too high or too low.

  function cancel() {
    let cancel;
    let input = prompt(message);
    if (input === null) {
      game = false;
    };
    cancel = parseFloat(input);
  }


====================  RANDOM ARRAY  ====================

  Create an array of random numbers

  Create a function generateRandomArray that accepts one argument: length (the length of the array).
  Inside the function, use a for loop to generate an array of random numbers between 1 and 100.
  Return the array from the function.


====================  SUM ARRAY  ====================

  Calculate the sum of even numbers in the array

  Create a function sumEvenNumbers that accepts an array as an argument.
  Use a for loop to iterate through the array and calculate the sum of the even numbers.
  Return the sum of the even numbers.


====================  BANK ACCOUNT  ====================

  Create an object called account that has the following properties:

  - accountName, should be the data type string --> this property should contain the name of the account holder
  - balance, should be the data type number --> this property should contain the total amount of the account
  - getBalance, should be a function --> this function should display the total amount of the account to the user
  - deposit, also a function --> this function should be able to deposit money onto the balance of the account
  - withdrawal, also a function --> this function should be able do withdraw money from the balance of the account
  - getAccountName, function as well --> this function should display the account holders name to the user
  - accountError, same as above function! --> this one is a bit tricky... it's up to you to figure out how or what you should use this for.

  HINT: it's more a thinking poblem than a technical problem

  EXTRA: exitAccount, should be a function --> this function should exit the account

  HINT: there are a few different ways to do this, it's up to you which way you choose.

  *** EXTRA = OPTIONAL NOT MANDATORY ***

  - Remember that a function is just a value. And if a function is just a value then we can both pass it as a parameter to a function and pass it as a property of an object.
  - The object should handle all of the functionality (logic)
  - The atm() function should be responsible for showing the user interface and based on the user input show the right meny choice

  HINT:

  these operators could probably be useful in this assignment:

  && operator
  || operator

  to handle one of the potential errors you can use this built in method isNaN(), this is how you use it:

  const variableName = 10;

  isNaN(variableName)
