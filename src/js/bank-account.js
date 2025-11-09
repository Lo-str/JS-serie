import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

// tiny helpers to replace browser APIs in Node:
function alert(msg) {
  console.log(String(msg));          // print to terminal
}
function confirm(question) {
  const ans = prompt(`${question} (y/n): `);
  return ans && ans.trim().toLowerCase().startsWith('y');
}

//========== Bank Account ==========\\

let usersName = prompt(`Hi!😃 Please enter your name: `);
alert(`Welcome to your bank ${usersName}! 🌞`);

// Main Menu
function atm() {
  let menu = true;
  while (menu) {
    alert("🏧\n\n1. Deposit\n2. Withdrawal\n3. Account Name\n4. Balance\n5. Exit")
    let options = prompt(`Please choose an option: `);

    if (options === null) {
      alert("Have a lovely day! Bye!😎")
      menu = false;
      break;
    }

    switch (options) {

      case "1": {
        while (true) {
          const input = prompt(`Please enter deposit amount: `);
          const result = account.deposit(input);
          alert(result.message);
          if (!result.retry) break;
      }
      break;
    }

      case "2": {
        while (true) {
          const input = prompt(`Please enter withdrawal amount: `);
          const result = account.withdrawal(input);
          alert(result.message);
          if (account.balance === 0) {
            alert("Oops, your account is empty!")
            return;
          }
          else if (!result.retry) break;
      }
      break;
    }

      case "3": {
        const result = account.getAccountName();
        alert(result);
        break;
      }

      case "4": {
        const result = account.getBalance();
        alert(result);
        break;
      }

      case "5": 
        alert("Have a lovely day! Bye!😎")
        menu = false;
        break;

      default:
        alert(account.accountError("Please choose a valid option 🙂"));
    }
  }
} 

function isValidNumber(value) {
  if (Number.isNaN(value)) {
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
    return `Your balance is💲${this.balance}`;
  },

   // display the account holders name to the user
  getAccountName() {
    return `Account holder: ${this.accountName}`;
  },

  // deposit money onto the balance of the account
  deposit(input) {

    if(!isValidInput(input)) {
      return {
        retry: true,
        message: this.accountError("Unvalid input: ")
      }
    }

    const num = Number(input);
    if (!isValidNumber(num)){
      return {
        retry: true,
        message: this.accountError("Unvalid number!")
      }
    }

    else if (num <= 0) {
      return {
        retry: true,
        message: this.accountError("Your deposit must be greater than 0!")
    }
  }
    
    else {
      this.balance += num;
      return {
        retry: false,
        message: `Your deposit was successfully added to your bank account!\nYour balance: 💲${this.balance}`}
    }
  },

  // withdraw money from the balance of the account
  withdrawal(input) {

    if(!isValidInput(input)) {
      return {
        retry: true,
        message: this.accountError("Unvalid input")
      }
    }

    const num = Number(input);
    if (!isValidNumber(num)){
      return {
        retry: true,
        message:this.accountError("Unvalid number")
      }
    }

    else if (num > this.balance) {
      return {
        retry: false,
        message: this.accountError("Looks like your balance can't follow!😮‍💨")
      }
    }

    else if (num <= 0) {
      return {
        retry: true,
        message: this.accountError("Your withdrawal must be greater than 0.")
      }
    }
  
    else {
      this.balance -= num;
      return {
        retry: false,
        message: `With great power comes great responsibilities Padawan!💸\nTrade carefully 😌\nYour balance: 💲${this.balance}`
      }
    }
  },

  // display an error message to the user
  accountError(message) {
    return `Oh nooo! ☠️\n${message}`;
  },
};

atm();
