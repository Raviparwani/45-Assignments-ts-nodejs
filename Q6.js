"use strict";
// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
// and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around
// the name is displayed. Then print the name after striping the white spaces.
//example1
console.log("\nExample1", "-".repeat(50));
console.log("RaviKanhialalParwani");
console.log("Ravi\tKanhia\tlal\tParwani");
console.log("Ravi\nKanhia\nlal\nParwani");
//example 2
console.log("\nExample2", "-".repeat(50));
// TypeScript Code
let personName = "ShahAbdulLatifBhittai";
let personName1 = personName = "Shah\tAbdul\tLatif\tBhitta";
// Print the name with whitespace
console.log("Name with Whitespace:\n", personName);
// Strip whitespace and print the name
let person1 = "MuhammadAliJinnah";
let person2 = "Muhammad\nAli\nJinnah";
console.log("Stripped Name:\n", person2);
