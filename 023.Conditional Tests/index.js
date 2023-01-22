/*  Write a series of conditional tests. Print a statement describing each test 
and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let car = "Audi";
let num1 = 5;
let num2 = 9;
let num3 = 9;
let carColor = "Black";

console.log(num1 >= num2); // 5 is not greater or equal to 9   false
console.log(num2 > num1); // 9 is greater than 5        true
console.log(num2 === num1); // 9 is not equal to 5 so false
console.log(num2 === num3); // 9 is equal to 9 so true

console.log(carColor == "white"); // car color defined is not equal to white so false
console.log(carColor == "Black"); // car color defined is black so true
