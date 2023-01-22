/* Working with one of the programs from Exercises 14 through 18,
   print a message indicating the number of people you are inviting to dinner. */

let invitation = ["Hamza", "Waseem", "Arham"];
for (let i = 0; i < invitation.length; i++) {
  let invite = invitation[i];
  console.log(
    `Hi,${invite},I would like to invite you to dinner at home."Welcome to my Home"`
  );
}
let guestNum = invitation.length;
console.log(`"Total ${guestNum} guest are invited to dinner"`);
