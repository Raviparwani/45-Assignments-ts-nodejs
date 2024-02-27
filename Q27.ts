// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Version 1 Green Alien:      
let AlienColor: string = "Green"
if (AlienColor === "Green") {
    console.log("• Version 1 Green Alien:")
    console.log("Player just earned 5 points! for Green Alien\n")
    
}
else if (AlienColor === "Yellow") {
    console.log("Player just earned 10 points! for Yellow Alien")
}
else if (AlienColor === "Red") {
    console.log("Player just earned 15 points! for Red Alien")
}

console.log("-".repeat(50))

// Version 2 Yellow Alien:
let aliennColor: string = "Yellow"
if (aliennColor === "Green") {
    console.log("Player just earned 5 points! for Green Alien")
}
else if (aliennColor === "Yellow") {
    console.log("• Version 2 Yellow Alien:")
    console.log("Player just earned 10 points! for Yellow Alien\n")
}
else if (aliennColor === "Red") {
    console.log("Player just earned 15 points! for Red Alien")
}

console.log("-".repeat(50))

// Version 3 Red Alien:
let alienColor: string = "Red"
if (alienColor === "Green") {
    console.log("Player just earned 5 points! for Green Alien")
}
else if (alienColor === "Yellow") {
    console.log("Player just earned 10 points! for Yellow Alien")
}
else if (alienColor === "Red") {
    console.log("• Version 3 Red Alien:")
    console.log("Player just earned 15 points! for Red Alien\n")
}
