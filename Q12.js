"use strict";
//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be 
// personalized with the person’s name.
//Example 1
console.log("\nExample1", "-".repeat(50));
let names = ["Shahbaz Ahmed", "Ghouse Ahmed", "Waqas Ahmed"];
let message = "Do you like to play Cicket ";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
//Example2
console.log("\nExample2", "-".repeat(50));
let nameS = ["John", "Alice", "Bob", "Emily", "David"];
// Print personalized greetings for each person
for (let index of nameS) {
    console.log(`Hello, ${index}, How are you doing today!`);
}
