/* You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each.*/

//• Tests for equality and inequality with strings
let str1 = "Hello World";
let str2 = "Hello World";
let str3 = "hello world";

console.log(str1 == str2);
console.log(str2 == str3);
console.log(str1 !== str3);

//Tests using the lower case function
console.log(str1.toLowerCase() == str2);

//  Numerical tests involving equality and inequality,
//  greater than and less than, greater than or equal to, and less than or equal to

let num1 = 5;
let num2 = 9;
let num3 = 9;

console.log(num1 >= num2); // 5 is not greater or equal to 9   false
console.log(num2 > num1); // 9 is greater than 5        true
console.log(num2 !== num1); // 9 is not equal to 5 so true  (! mark used as a not)
console.log(num2 === num3); // True because 9 is equl to 9
console.log(num2 < num1); // 5 is less than 9        false

// • Tests using "and" and "or" operators

console.log(num1 == num2 && num1 == num3); // one condition is false so result is false in AND operator
console.log(num1 == num2 || num2 == num3); // one condition is true so result is true in OR operator

// Test whether an item is in a array

let array = [3, 4, 5, 7, 8];
let num = array.find((e) => e === 7); // 7 is find in array so it return 7 in console
console.log(num);

// • Test whether an item is not in a array

let array2 = [3, 4, 5, 7, 8];
let numReturn = array.find((e) => e === 15); // 15 is not find in array so it return undefined in console
console.log(numReturn);
