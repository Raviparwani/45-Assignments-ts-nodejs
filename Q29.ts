// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of
// independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!


const MyfavFruits: string[] = ["Mango", "Apple", "Banana"];

// Check for specific fruits
if (MyfavFruits.includes("Mango")) {
    console.log("I really like Mangoes!");
}

if (MyfavFruits.includes("Apple")) {
    console.log("I really like apples!");
}

if (MyfavFruits.includes("Banana")) {
    console.log("I really like Bananas!");
}

// Additional checks
if (MyfavFruits.includes("orange")) {
    console.log("I really like oranges!");
} else {
    console.log("Oranges are not in My list of favorite fruits.");
}

if (MyfavFruits.includes("grape")) {
    console.log("I really like grapes!");
} else {
    console.log("Grapes are not in My list of favorite fruits.");
}


