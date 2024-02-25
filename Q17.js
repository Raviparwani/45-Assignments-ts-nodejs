"use strict";
// Q17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that
//  you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know
//  you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.
let guestListnew = ["Sanam", "Sikandar", "Maryam"];
const guestcannotmakeIt = guestListnew[1]; // Assume the second guest can't make it
// Print invitations to each person on the original guest list
for (let guest of guestListnew) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}
console.log(`Unfortunately, ${guestcannotmakeIt} can't make it to dinner.`);
// Replace the guest who can't make it with a new person
guestListnew[1] = "Sidra"; // Sikandar with Sidra
// Print invitations to each person on the updated guest list
for (let guest of guestListnew) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}
console.log("\n", "-".repeat(50));
// Announce the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add three new guests
guestListnew.unshift("Ahmed"); // Add to the beginning
guestListnew.splice(2, 0, "Fahad"); // Add to the middle
guestListnew.push("Sarah"); // Add to the end
// Print invitations to each person on the final guest list
for (let guest of guestListnew) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}
console.log("\n", "-".repeat(50));
// Q17. Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people.");
// Remove guests until only two names remain
while (guestListnew.length > 2) {
    const removedGuest = guestListnew.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Print invitations to the two remaining people
for (let guest of guestListnew) {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us!`);
}
// Empty the list
guestListnew = [];
console.log("Final guest list:", guestListnew);
