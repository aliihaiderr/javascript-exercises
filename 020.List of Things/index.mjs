/*  Think of something you could store in a array. For example, you could make a list of mountains,
    rivers, countries, cities, languages,or anything else you’d like.
    Write a program that creates a list containing these items.  */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let cities = [];
function creatingList() {
  for (let i = 0; cities.length < 3; i++) {
    let userInput = prompt(
      "Please Enter the name of the cities at least 3 that you like and make a list of them."
    );
    cities.push(userInput);
  }
}
creatingList();
console.log(cities);
