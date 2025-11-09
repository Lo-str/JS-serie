//========== Bank Account ==========\\

let usersName = prompt(`Please enter your name.`);
let welcome = confirm(`Welcome to your bank ${usersName}!`);

// Main Menu
function atm() {
  let menu = true;
  while (menu) {
    alert("Menu\n\n1. Deposit\n2. Withdrawal\n3. Account Name\n4. Balance\n5. Exit")
    let options = prompt(`Please choose an option:`);
    switch (options) {
      case "1":
        account.deposit();
        break;

      case "2":
        account.withdrawal();
        break;

      case "3":
        account.getAccountName();
        break;

      case "4":
        account.getBalance();
        break;

      case "5":
        account.exitAccount();
        menu = false;
        break;

      default:
        account.accountError("choose a valid option ");
        break;
    }
  }
}

function again(message) {
  let result = confirm(message);
  if (result === false) {
    return;
  } else {
    return true;
  }
}  

function isValidNumber(input) {
  let converted = Number(input);
  if (Number.isNaN(converted)) {
    return false;
  } else {
    return true;
  };
}

function isValidInput(input) {
  if (input === null || input.trim() === "") {
    return false;
  } else {
    return true;
  }
}

const account = {

  accountName: usersName, // name of the account holder
  balance: 100000, // Total amount on the bank account

  // display the total amount of the account to the user
  getBalance() {
    alert(`Your balance is $${this.balance}`);
  },

  // deposit money onto the balance of the account
  deposit(amount) {
    amount = prompt(`Please enter the amount`);
    if(!isValidInput(amount)) {
      account.accountError("enter a valid input");
      return;
    } else {
      let num = Number(amount);
    }
    
    if (!isValidNumber(num)){
      account.accountError("enter a valid number");
      return;
    }
    else if (num < 1) {
      this.accountError("Looks like something went wrong!")
      return;
    }
    else {
      this.balance += num;
      alert("Your deposit was successfully added to your bank account! ")
      again("deposit", "Would you like to do another deposit?");
    }
  },

  // withdraw money from the balance of the account
  withdrawal(amount) {
    amount = prompt(`Please enter the amount`);  
    if(!isValidInput(amount)) {
      account.accountError("enter a valid input");
      return;
    } else {
      let num = Number(amount);
    }

    if (num > this.balance) {
      this.accountError("but don't worry, all you need is code!")
      return;
    }
    else if (num < 1) {
      this.accountError("Looks like something went wrong!")
      return;
    }
    else {
      this.balance -= num;
      alert(`With great power comes great responsibilities Padawan! Trade carefully 💸\nYour balance is now ${this.balance}`)
      again("withdrawal", "Would you like to do another withdrawal?");
    }
  },

  // display the account holders name to the user
  getAccountName() {
    alert(`${this.accountName}`)
  },

  // display an error message to the user
  accountError(message) {
    alert("Oh nooo! ☠️");
    alert(`${message}, try again!`)
    return;
  },

  // exit the account
  exitAccount() {
    alert("Have a lovely day! Goodbye!")
    return;
  },
};

welcome();
atm();