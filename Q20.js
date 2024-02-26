"use strict";
// Q20.Think of something you could store in a array. For example, you could make a list of mountains,
// rivers, countries, cities, languages, or anything else you’d like. Write a program that
// creates a list containing these items.
//Example 1
console.log("\nExample1", "-".repeat(50));
let languages = [
    "Sindhi", "Urdu", "English", "Chinese"
];
languages.map((item) => console.log(item));
//Example 2
console.log("\nExample2", "-".repeat(50));
// List of mountains
const mountains = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
// Print the list of mountains
console.log("List of Mountains:");
for (const mountain of mountains) {
    console.log(mountain);
}
