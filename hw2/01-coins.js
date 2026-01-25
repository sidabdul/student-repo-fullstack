/** Exercise 01 - Coins **/

// Add your function here

function calculateChange(amount) {
  if (amount > 100) {
    return " Error: the number is too large.";
  }

  if (amount < 0) {
    return " Error: the number is negative";
  }

  if (typeof amount !== "number") {
    return " Error: enter a number for the amount";
  }

  let cents = Math.round(amount * 100);

  let dollars = Math.floor(cents / 100);
  cents = cents % 100;

  let quarters = Math.floor(cents / 25);
  cents = cents % 25;

  let dimes = Math.floor(cents / 10);
  cents = cents % 10;

  let nickels = Math.floor(cents / 5);
  cents = cents % 5;

  let pennies = cents;

  return `$${amount.toFixed(2)} ==> ${dollars} dollars, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`;
}

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
//Negative amount
console.log(calculateChange(-4.62));
//Char instead of number
console.log(calculateChange("Hello"));
