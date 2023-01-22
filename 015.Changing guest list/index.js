/* You just heard that one of your guests can’t make the dinner,
   so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
   
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list. */

let invitation = ["Hamza", "Arham", "Waseem"];
let neverMake = invitation.splice(1, 1, "Faisal");

for (let i = 0; i < invitation.length; i++) {
  let invite = invitation[i];
  console.log(
    `Hi,${invite},I would like to invite you to dinner at home."Welcome to my Home"`
  );
}
console.log(`${neverMake},never make dinner due to work load in office. `);
