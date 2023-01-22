/*  You just found a bigger dinner table, so now more space is available.
    Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
   informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

let invitation = ["Hamza", "Arham", "Waseem"];
let neverMake = invitation.splice(1, 1, "Faisal");

for (let i = 0; i < invitation.length; i++) {
  let invite = invitation[i];
  console.log(
    `Hi,${invite},I would like to invite you to dinner at home."Welcome to my Home"`
  );
}
console.log(" "); // empty space
console.log(`${neverMake},never make dinner due to work load in office. `);
console.log(" "); // empty space
for (let i = 0; i < invitation.length; i++) {
  let invite = invitation[i];
  console.log(
    `Hello ,${invite},We found a bigger dinner table need to add more guest`
  );
}
invitation.unshift("Moazam");
invitation.splice(2, 0, "Daniyal");
invitation.push("Tawakel"); //instead of append use push here.
console.log(" "); // empty space
for (let i = 0; i < invitation.length; i++) {
  let invite = invitation[i];
  console.log(`welcome..!,${invite},Here we are gather for big dinner`);
}
