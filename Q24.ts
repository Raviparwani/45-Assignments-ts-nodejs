//Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False
// result for each of the following:

// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


// 1.(Tests for equality and inequality with strings)
const string1: string = "car";
const string2: string = "bike";
console.log(string1 === string2);
console.log(string1 !== string2);

// 2.(Tests using the lower case function)
const uppercaseString: string = "INFORMATION";
console.log(uppercaseString.toLowerCase() === "information");
console.log(uppercaseString.toLowerCase() === "InFor mAtion");

// 3.(Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to)
const num1: number = 100;
const num2: number = 50;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);

//4.(Tests using "and" and "or" operators)

const day: boolean = true;
const night: boolean = false;
console.log(day && night);
 console.log(day || night);

// Test using & in false
const faizaComing: boolean = true;
const SidraComing: boolean = false;

console.log(faizaComing && SidraComing); // false because both contiditions are diffrent to eachother
console.log(faizaComing || SidraComing); // true because one condition is true in or


// // Test using & in true 
const SanaComing: boolean = true;
const SanamaComing: boolean = true;

console.log(SanaComing && SanamaComing); //true because both conditions are true in and
console.log(SanaComing || SanaComing);   //true because both conditions are true in or


// 5. (Test whether an item is in an array)
const fruits: string[] = ["Grapes", "Mango", "Banana", "Gava"];

// Test 1
console.log(fruits.some(fruit => fruit === "Grapes"));  // true (because "Grapes" is in the array)

// Test 2
console.log(fruits.some(fruit => fruit === "grapes"));  // false (because "grapes" is not in the array, and some is case-sensitive)