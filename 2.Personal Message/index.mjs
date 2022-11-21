/*  Personal Message: Store a person’s name in a variable, and print a message to that person.
    Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?” */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

var personName = prompt("Please Enter Your Name ");
console.log(
  ` "Hello ${personName}, would you like to learn some JavaScript today ?" `
);
