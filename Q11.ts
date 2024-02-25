//11. Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.


//example1
console.log("\nExample1","-".repeat(50))

let fnames: string[] = ["Najeeb Ahmed", "Waqar Ahmed", "Shahbaz Ahmed", "Ghouse Ahmed"];
console.log(fnames[0])
console.log(fnames[1])
console.log(fnames[2])
console.log(fnames[3])

//example2
console.log("\nExample2","-".repeat(50))

let fnames1: string[] = ["John", "Alice", "Bob", "Emily", "David"];

// Print each person's name one at a time
for (let i = 0; i < fnames1.length; i++) {       //Using For loop
  console.log(fnames1[i]);
}

