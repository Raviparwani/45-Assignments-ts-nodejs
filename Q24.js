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
var string1 = "car";
var string2 = "bike";
console.log(string1 === string2);
console.log(string1 !== string2);
// 2.(Tests using the lower case function)
var uppercaseString = "INFORMATION";
console.log(uppercaseString.toLowerCase() === "information");
console.log(uppercaseString.toLowerCase() === "InFor mAtion");
// 3.(Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to)
var num1 = 100;
var num2 = 50;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
//4.(Tests using "and" and "or" operators)
var day = true;
var night = false;
console.log(day && night);
console.log(day || night);
// Test using & in false
var faizaComing = true;
var SidraComing = false;
console.log(faizaComing && SidraComing); // false because both contiditions are diffrent to eachother
console.log(faizaComing || SidraComing); // true because one condition is true in or
// // Test using & in true 
var SanaComing = true;
var SanamaComing = true;
console.log(SanaComing && SanamaComing); //true because both conditions are true in and
console.log(SanaComing || SanaComing); //true because both conditions are true in or
// 5. (Test whether an item is in an array)
var fruits = ["Grapes", "Mango", "Banana", "Gava"];
// Test 1
console.log(fruits.some(function (fruit) { return fruit === "Grapes"; })); // true (because "Grapes" is in the array)
// Test 2
console.log(fruits.some(function (fruit) { return fruit === "grapes"; })); // false (because "grapes" is not in the array, and some is case-sensitive)
