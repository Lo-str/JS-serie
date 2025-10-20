// Create a simple program that returns a price tag from the user, then give them a discount of 10 percent
let priceString = prompt("Please enter a price tag:");
let number = priceString.replace("$", "");
let price = parseFloat(number);
let discount = price - (price * 0.10);
console.log(`Yay! You are offered a discount on the account of being awesome! Here's the new price: $${discount}`);
