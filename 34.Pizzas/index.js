/* Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
  and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
  The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza! */

let favPizzas = ["Fajita", "chicken tikka", "extream Special"];
for (let i = 0; i < favPizzas.length; i++) {
  console.log(`I like ${favPizzas[i]} pizza`);
}

let statement1 = `I realy like ${favPizzas[2]} because its very cheesy and taste is awosome\n`;
let statement2 = `I realy like ${favPizzas[1]},its yummy...!with chicken filled\n`;
let statement3 = `I realy like ${favPizzas[0]} because it taste and smell well with vegitables`;

console.log(statement1, statement2, statement3);
console.log("I realy love eating pizza");
