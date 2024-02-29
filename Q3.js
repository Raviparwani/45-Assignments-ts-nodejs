// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in
//  lowercase, uppercase, and titlecase.
//Example 1
console.log("\nExample1", "-".repeat(50));
var firstName = "ravi kumar";
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
//example 2 for lowercase
console.log("\nExample2", "-".repeat(50));
var name0 = "Shahbaz ahmed";
var name2 = name0.toLowerCase();
console.log(name2);
//example 2 for uppercase
var name3 = "mukesh kumar";
var name4 = name3.toUpperCase();
console.log(name4);
//example  for titlecase
var nameToConvert = "ravi kumar parwani";
// Split the name into an array of words
var words = nameToConvert.split(' ');
// Capitalize the first letter of each word
var titleCaseName = words.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(' ');
console.log(titleCaseName);
