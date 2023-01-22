/*  You just found out that your new dinner table won’t arrive in time for the dinner,
    and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
  Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

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
console.log(" ");
console.log(
  "Due to dinner table won't arrive on time soo i invite for only two more guest. "
);
console.log(" ");

for (let i = 0; invitation.length > 2; i++) {
  let person = invitation.pop();
  console.log(
    `I'm so sorry ${person}, I can’t invite you to dinner due to some reason.`
  );
}
console.log(" ");
for (let i = 0; i < invitation.length; i++) {
  let element = invitation[i];
  console.log(`${element}, You are still invite for a dinner.`);
}
console.log(" ");

invitation.pop();
invitation.pop();

console.log(invitation);
