// Q19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.

let DinnerGuests: string[] = ["Muneer", "Fahad", "Akash"];

DinnerGuests.map((elements) => (
    console.log(`Dear ${elements}, You Are Invited To the Dinner`)
));

// Print the number of people you are inviting to dinner
console.log(`Total number of people invited to dinner: ${DinnerGuests.length}`);


