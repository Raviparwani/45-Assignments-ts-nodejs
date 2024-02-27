// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the
// player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.



// Version that runs the if block (alien_color is 'green')
let alien_color_if = 'green';

if (alien_color_if === 'green') {
    console.log("• Version that runs the if block alien_color is 'green'\n")
  console.log("Player just earned 5 points for shooting the alien!");
} else {
  console.log("Player just earned 10 points.");
}

console.log("-".repeat(50))


// Version that runs the else block (alien_color is 'red')
let alien_color_else = 'red';

if (alien_color_else === 'green') {
  console.log("Player just earned 5 points for shooting the alien!");
} else {
    console.log("• Version that runs the else block alien_color is 'red'\n")
  console.log("Player just earned 10 points.");
}
