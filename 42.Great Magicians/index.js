/*   Start with a copy of your program from Exercise 39. Write a function called make_great() 
that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified */

let megicians = [
  "David Copperfield",
  "Doug Henning",
  "Roy Rochlin",
  "Lance Burton",
  "Ricky Jay",
];

function showMegician(name) {
  makeGreat(name);
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
}
function makeGreat(phrase) {
  for (let j = 0; j < phrase.length; j++) {
    phrase[j] = `Great ${phrase[j]}`;
  }
}

showMegician(megicians);
