//========== Bank Account ==========\\

const account = {
  accountName: "Lo", // name of the account holder
  balance: 0, // total amount of the account

  // display the total amount of the account to the user
  getBalance() {
    confirm(`Your balance is $${this.balance}`);
    return atm();
  },

  // deposit money onto the balance of the account
  deposit(amount) {
    amount = parseFloat(prompt(`Please enter the amount`));
    alert(`Confirm the amount $${amount}`);

    if (typeof amount === isNaN(amount) && !Math.abs(amount)) {
      return this.accountError;
    } else {
      let newBalance = this.balance + amount;
      console.log(`Your deposit was successfully added to your bank account! Your balance is now ${newBalance}`)
      again("Would you like to do another deposit?")
    }
  },

  // withdraw money from the balance of the account
  withdrawal(amount) {
    let amount = parseFloat(prompt(`Please enter the amount you would like to withdraw`));
    alert(`Confirm the amount $${amount}`);

    if (typeof amount === isNaN(amount) && !Math.abs(amount) || amount > this.balance) {
      return this.accountError("enter a ");
    } else {
      let newBalance = this.balance + amount;
      console.log(`Your deposit was successfully added to your bank account! Your balance is now ${newBalance}`)
      again("Would you like to do another deposit?")
    }
  },

  // display the account holders name to the user
  getAccountName() {},

  // display an error message to the user
  accountError(message) {
    console.log("Oh nooo! Looks like something went wrong!");
    console.log(`I need you to ${message} to pursue, try again!`)
    return;
  },

  // exit the account
  exitAccount() {},
};
account.getBalance();

function atm() {
  let menu = true;
  console.log("Menu\n\n1. Deposit\n2. Withdrawal\n3. Account name\n4. Exit")
  let options = prompt(`Please choose an option:`);
  while (menu) {
    switch (options) {
      case 1:
        console.log(account.getAccountName());
        break;

      case 2:
        console.log(account.getBalance());
        break;

      case 3:
        console.log(account.deposit());
        break;

      case 4:
        console.log(account.withdrawal());
        break;

      case 5:
        console.log(account.exitAccount());
        break;

      default:
        console.log(account.accountError("choose a valid otpion "));
    }
  }
}

function again(message) {
  let choice = confirm(message);
  if (choice === false) {
    return atm();
  } else {
    return account.deposit();
  }
}

function isNumber(input) {
  if (Number.isNaN(input)) {
    return account.accountError("enter a valid number")
  } else {};
}

atm();

// function welcome(firstName, lastName) {
//   let fullName = firstName + lastName;
//   confirm(`Welcome to your bank webplatform ${fullName}!`)
//   return fullName;
// }
// let fullName = prompt(`Hi! Please enter your ${firstName} and ${lastName}.`);
