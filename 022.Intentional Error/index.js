/*  If you haven’t received an array index error in one of your programs yet, try to make one happen.
    Change an index in one of your programs to produce an index error.
    Make sure you correct the error before closing the program. */

let invitation = ["Hamza", "Arham", "Waseem", "Rehan"];
let neverMake = invitation.splice(1, 1, "Faisal");

for (let i = 0; i < invitation.length; i++) {
  let invite = invitation[i];
  console.log(`${invite}`);
}
console.log(`${neverMake},never make dinner due to work load in office. `);
console.log(invitation[4]); //if we want to access any index that have no value than it return undefined.