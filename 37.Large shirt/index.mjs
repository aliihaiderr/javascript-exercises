/*  Modify the make_shirt() function so that shirts are large by default with a message that reads
    I love JavaScript. Make a large shirt and a medium shirt with the default message, 
    and a shirt of any size with a different message. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

function makeShirt(size) {
  if (size == "Large") {
    console.log("I love JavaScript");
  } else if (size == "Medium") {
    console.log("keep calm and stay focused on your goals");
  } else {
    console.log("no one..let you down");
  }
}
let shirtSize = prompt(
  "please enter your shirt size like Large,Medium,Small: "
);

makeShirt(shirtSize);
