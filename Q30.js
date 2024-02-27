"use strict";
// Q30. Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin,
// would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//Example in for loop
console.log("• Example in for loop");
let usernames = ["Admin", "Fiza", "Ahmed", "Faizan", "Muneeb"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${usernames[i]} Thank you for logging in again.`);
    }
}
console.log("-".repeat(50));
//Example in for of loop
console.log("• Example in for of loop");
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
