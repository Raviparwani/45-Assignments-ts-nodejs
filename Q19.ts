// Q19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.

let guestArr: string[] = ["Muneer", "Fahad", "Akash"]
let canNotattend: string = "Muneer";
let newGuest: string = "Sanam";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Dua");
let middleGuest: string = "Faryal";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Sidra");
// console.log(guestArr);


 console.log(guestArr.length + " " + "Friends" + " " + "are invited to dinner");