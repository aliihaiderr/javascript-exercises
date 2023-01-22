/* Add an if test to Exercise 31 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */

let userName = ["alihaider", "admin", "hamza", "waseem", "faisal"];

if (userName.length !== 0) {
  for (let i = 1; i < userName.length; i++) {
    userName.shift();
  }
} else {
  console.log("We need to find users");
}
