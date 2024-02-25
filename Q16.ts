// Q16. More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


let guestListN: string[] = ["Sanam", "Sikandar", "Maryam"];
const guestcannotMakeIt: string = guestListN[1]; // Assume the second guest can't make it

// Print invitations to each person on the original guest list
for (let guest of guestListN) {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}

console.log(`Unfortunately, ${guestcannotMakeIt} can't make it to dinner.`);

// Replace the guest who can't make it with a new person
guestListN[1] = "Sidra"; // Sikandar with Sidra

// Print invitations to each person on the updated guest list
for (let guest of guestListN) {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}

// Announce the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add three new guests
guestListN.unshift("Ahmed"); // Add to the beginning
guestListN.splice(2, 0, "Fahad"); // Add to the middle
guestListN.push("Sarah"); // Add to the end

// Print invitations to each person on the final guest list
for (let guest of guestListN) {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}