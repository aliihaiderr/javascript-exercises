/*  Name Cases: Store a person’s name in a variable,
    and then print that person’s name in lowercase, uppercase, and titlecase. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

var personName = prompt("Please Enter Your Name ");
console.log(personName.toLowerCase()); //lower case
console.log(personName.toUpperCase()); //upper case

console.log(personName.toLowerCase()); //title case  pending...