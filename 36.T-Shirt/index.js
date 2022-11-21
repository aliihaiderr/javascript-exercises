/*  Write a function called make_shirt() that accepts a size and the text of a message that should be printed
    on the shirt. The function should print a sentence summarizing the size of the shirt and 
    the message printed on it. Call the function. */

function makeShirt(size, msg) {
  let sentence = `The shirt is ${size} & the message is ${msg}`;
  console.log(sentence);
}

makeShirt("'Medium'", "'keep calm and focus'");
