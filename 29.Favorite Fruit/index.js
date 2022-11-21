/*  Make a array of your favorite fruits, and then write a series of independent
    if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
let fruites = ["Grapes", "Banana", "Apple"];

if (fruites.length > 0) {
  let fav1 = fruites.find((i) => i === "Grapes");
  console.log(`You really like ${fav1}!`);
}

if (fruites.length > 0) {
  let fav2 = fruites.find((e) => e === "Banana");
  console.log(`You really like ${fav2}!`);
}

if (fruites.length > 0) {
  let fav3 = fruites.find((j) => j === "Apple");
  console.log(`You really like ${fav3}!`);
}

if (fruites.length > 0) {
  let fav4 = fruites.find((k) => k === "Peach");
  console.log(`You really like ${fav4}!`);
}

if (fruites.length > 0) {
  let fav5 = fruites.find((l) => l === "orange");
  console.log(`You really like ${fav5}!`);
}
