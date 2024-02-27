"use strict";
// // 25. Alien Colors #1: Imagine an alien was just shot down in a game.
// // Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// // • Write an if statement to test whether the alien’s color is green. If it is,
// // print a message that the player just earned 5 points.
// // • Write one version of this program that passes the if test and another that fails.
// // (The version that fails will have no output.)
// // Version that passes the if test 
let alianColorPass = "Green";
if (alianColorPass === 'Green') {
    console.log("player just earned 5 points!");
}
else {
    console.log("No points earned.");
}
console.log("• passes the test alianColorPass is Green\n");
console.log("-".repeat(50));
//  Version that fails the if test 
let alianColorFail = "Red";
if (alianColorFail === "Green") {
    console.log("player just earned 5 points!");
}
else {
    console.log("No points earned.");
}
console.log("• fails the test alianColorFail is Red\n");
