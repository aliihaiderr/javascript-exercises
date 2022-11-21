/*Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it
 a value of 'green', 'yellow', or 'red'. 
 • Write an if statement to test whether the alien’s color is green.
        If it is, print a message that the player just earned 5 points.
 • Write one version of this program that passes the if test and another that fails.
      (The version that fails will have no output.)  */

let alienColor = "green";
if (alienColor == "green") {
  console.log("player earned 5 points.(Case-1)");
} else {
  console.log("not match");
}

let alienColor2 = "green";
if (alienColor2 == "green") {
  // console.log("player earned 5 points.");        //if statement passes but not print any message
}
