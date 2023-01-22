/*  If you could invite anyone, living or deceased, to dinner,who would you invite?
    Make a list that includes at least three people you’d like to invite to dinner.
    Then use your list to print a message to each person, inviting them to dinner. */

let invitation = ["Hamza", "Waseem", "Arham"];
for (let i = 0; i < invitation.length; i++) {
  let invite = invitation[i];
  console.log(
    `Hi,${invite},I would like to invite you to dinner at home."Welcome to my Home"`
  );
}
