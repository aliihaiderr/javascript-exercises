/*  Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block. */

let alienColor = "green";

if (alienColor === "green") {
  console.log("The player just earned 5 points for shooting the alien");
} else {
  console.log("The player just earned 10 points.");
}

// case#2 running
let alienColor2 = "red";
if (alienColor2 === "green") {
  console.log("The player just earned 5 points for shooting the alien");
} else {
  console.log("The player just earned 10 points.");
}
