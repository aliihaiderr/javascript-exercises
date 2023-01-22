/* Make a array of magician’s names. Pass the array to a function called show_magicians(), 
   which prints the name of each magician in the array. */

let megicians = [
  "David Copperfield",
  "Doug Henning",
  "Roy Rochlin",
  "Lance Burton",
  "Ricky Jay",
];

function showMegician(megician) {
  for (let i = 0; i < megician.length; i++) {
    console.log(megician[i]);
  }
}

showMegician(megicians);
