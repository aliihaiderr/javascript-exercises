/*  Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time. */

let items1 = [
  "Bread slices",
  "Cheese slices",
  "Mayonnaise sauce",
  "Black pepper",
  "taste Salt",
  "Mustard",
  "Lettuce leaves",
];
let items2 = [
  "Bread slices",
  "Meat slices",
  "Mayonnaise sauce",
  "Salt",
  "Mustard",
  "Lettuce leaves",
];
let items3 = [
  "Bread slices",
  "Chicken slices",
  "Mayonnaise sauce",
  "Black pepper",
  "Salt",
  "Mustard",
];
function sandwitch(item) {
  for (let i = 0; i < item.length; i++) {
    const element = item[i];
    console.log(`Sandwitch ingredients ${element}`);
  }
}
console.log("order #1");
sandwitch(items1);
console.log("order #2");
sandwitch(items2);
console.log("order #3");
sandwitch(items3);
