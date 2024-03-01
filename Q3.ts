// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in
//  lowercase, uppercase, and titlecase.

//Example 1
console.log("\nExample 1","-".repeat(50))
let firstName: string = "ravi kumar";

console.log(`${firstName.toLocaleLowerCase()}\t"lowercase"`);
console.log(`${firstName.toLocaleUpperCase()}\t"UPPERCASE"`);
console.log(`${firstName.replace(/\b\w/g,(char) => char.toUpperCase())}\t"Title Case"`)
//example 2 for lowercase
console.log("\nExample2","-".repeat(50))

let name0: string = "Shahbaz ahmed"
let name2:string = name0.toLowerCase();
console.log(`${name2}\t"lowercase"`)

//example 2 for uppercase
let name3: string = "mukesh kumar"
let name4:string = name3.toUpperCase();
console.log(`${name4}\t"UPPERCASE"`)


// //example  for titlecase
let nameToConvert: string = "ravi kumar parwani";

// Split the name into an array of words
let words: string[] = nameToConvert.split(' ');

// Capitalize the first letter of each word
let titleCaseName: string = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(`${titleCaseName}\t"Title Case"`);


