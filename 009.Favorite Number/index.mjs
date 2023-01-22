/*  Store your favorite number in a variable. Then, using that variable,
    create a message that reveals your favorite number. Print that message. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

var favoriteNumber = parseInt(prompt("Please Enter Your Favorite Number "));
console.log("Youre Favorite Number is: " + favoriteNumber);
