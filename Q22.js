"use strict";
// Q22. Intentional Error: If you haven’t received an array index error in one of your programs yet,
//  try to make one happen. Change an index in one of your programs to produce an index error.
//  Make sure you correct the error before closing the program.
//example 1
console.log("\nExample1", "-".repeat(50));
const Planets = [
    "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"
];
console.log(Planets[6]);
console.log(Planets[8]);
//example2
console.log("\nExample2", "-".repeat(50));
const myArray = [1, 2, 3, 4, 5];
// Intentional error: Accessing an index outside the bounds of the array
const indexError = myArray[10];
// This line will not be reached due to the error, but let's log the result for illustration
console.log("Value at index 10:", indexError);
// Correcting the error by accessing a valid index
const validValue = myArray[2];
// Logging the valid value
console.log("Valid value at index 2:", validValue);
