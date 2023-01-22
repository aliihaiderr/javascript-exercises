/*  Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

let alienColor1 = "green";
let alienColor2 = "red";
let alienColor3 = "yellow";
// Case#1 Color is green
if (alienColor1 === "green") {
  console.log("the player earned 5 points");
} else if (alienColor1 === "red") {
  console.log("the player earned 10 points");
} else {
  console.log("the player earned 15 points");
}
// Case#2 Color is red
if (alienColor2 === "green") {
  console.log("the player earned 5 points");
} else if (alienColor2 === "red") {
  console.log("the player earned 10 points");
} else {
  console.log("the player earned 15 points");
}
// Case#3 Color is yellow
if (alienColor3 === "green") {
  console.log("the player earned 5 points");
} else if (alienColor3 === "red") {
  console.log("the player earned 10 points");
} else {
  console.log("the player earned 15 points");
}
