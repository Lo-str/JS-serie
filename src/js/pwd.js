// Write a isValidPassword function. It accepts 2 arguments: password and username

// Ask user for username
let userName = prompt("Welcome! Choose a username: ");
console.log(`Heya ${userName} !`)

// Ask user for password
let pwd = prompt("Now choose a password: ");

// Function that validates the password
function isValidPassword(password, username) {
  if (pwd.length < 8) {
    console.log("Oi! Your password must contain at least 8 characters.. Try again! =)");
    return false;
  }
  else if (pwd.includes(" ")) {
    console.log("Oi! Your password cannot contain spaces.. Try again! =)");
    return false;
  }
  else if (pwd.includes(userName)) {
    console.log("Sorry mate! Your password must be different than your username.. Try again! =)");
    return false;
  } else {
    console.log("Nice! Your password is now ready.")
    return true;
  }
};

// Call function
isValidPassword(pwd, userName);
