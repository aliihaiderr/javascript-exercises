/* Start with your work from Exercise 40. Call the function make_great() with a copy of the array
 of magicians’ names. Because the original array will be unchanged, return the new array and store
 it in a separate array. Call show_magicians() with each array to show that you have one array of the 
 original names and one array with the Great added to each magician’s name */

let megicians = [
  "David Copperfield",
  "Doug Henning",
  "Roy Rochlin",
  "Lance Burton",
  "Ricky Jay",
];

function showMegician(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
  makeGreat(name);
}
function makeGreat(phrase) {
  for (let j = 0; j < phrase.length; j++) {
    phrase[j] = `Great ${phrase[j]}`;
    console.log(phrase[j]);
  }
}

showMegician(megicians);
