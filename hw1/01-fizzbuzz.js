/** Exercise 01 - Fizzbuzz

Write a program that writes all the numbers from 1 to 100, with some exceptions: 
- For numbers divisible by 3, print “fizz” 
- For numbers divisible by 5 (but not 3), print “buzz” 
- For numbers divisible by 3 and 5, print “fizzbuzz”

Use console.log() to write the proper output to the command line.

**/

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...


for (let j = 1; j <= 100; j++) 
{
  if (j % 3 === 0 && j % 5 === 0) {
    console.log("fizzbuzz");
  } else if (j % 3 === 0) {
    console.log("fizz");
  } else if (j % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(j);
  }
}

