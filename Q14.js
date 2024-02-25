"use strict";
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//example1
console.log("\nExample1", "-".repeat(50));
let GuestList = ["Muneer", "Fahad", "Akash"];
GuestList.map((item) => (console.log(`Dear ${item}, You Are Invited To the Dinner`)));
//Example2
console.log("\nExample2", "-".repeat(50));
let guestList = ["Muneer", "Fahad", "Akash"];
// Print invitations to each person on the guest list
for (let list1 of guestList) {
    console.log(`Dear ${list1}, you are invited to dinner. Please join us!`);
}
