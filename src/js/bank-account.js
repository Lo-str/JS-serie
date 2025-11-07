//========== Bank Account ==========\\

const account = {
  accountName: "Lo", // name of the account holder
  balance: 0, // total amount of the account
  getBalance() {

  }, // display the total amount of the account to the user
  deposit(amount) {
    let amount = parseFloat(
      prompt(`Please enter the amount you would like to deposit`)
    );
    alert(`Confirm the amount $${amount}`);
    let newBalance = account.balance + amount;
    confirm(
      `Your deposit was successfully added to your bank account! Your balance is now ${newBalance}`
    );
  }, // deposit money onto the balance of the account
  withdrawal(amount) {}, // withdraw money from the balance of the account
  getAccountName() {}, // display the account holders name to the user
  accountError(message) {}, // display an error message to the user
  exitAccount() {}, // exit the account
};

function atm() {
  let menu = true;
  let options = prompt(`Please choose an option:`);
  while (menu) {
    switch (options) {
      case 1:
        console.log(getAccountName());
        break;

      case 2:
        console.log(getBalance());
        break;

      case 3:
        console.log(deposit());
        break;

      case 4:
        console.log(withdrawal());
        break;

      case 5:
        console.log(exitAccount());
        break;

      default:
        console.log(accountError());
    }
  }
}

// function welcome(firstName, lastName) {
//   let fullName = firstName + lastName;
//   confirm(`Welcome to your bank webplatform ${fullName}!`)
//   return fullName;
// }
// let fullName = prompt(`Hi! Please enter your ${firstName} and ${lastName}.`);
