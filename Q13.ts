// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples.
//  Use your list to print a series of statements about these items,
//  such as “I would like to own a Honda motorcycle.”


//Example 1
console.log("\nExample1","-".repeat(50))

let vehicles: string[] = ["Toyota Corolla", "Honda City", "Toyota Yaris", "Toyota Fortuner"]

vehicles.map((items) => console.log(`I would like to own a ${items}`));

//Example 2
console.log("\nExample2","-".repeat(50))

let transportation: string[] = ["car", "motorcycle", "bicycle", "bus", "train"];

// Print statements about each transportation mode
for (let index1 of transportation) {
  console.log(`I would like to own a ${index1}.`);
}