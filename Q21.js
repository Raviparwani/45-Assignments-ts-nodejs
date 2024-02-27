"use strict";
// Q21. They think of something you could store in a TypeScript Object. Write a program that
// creates Objects containing these items.
// example1
console.log("\nExample1", "-".repeat(50));
let Product = {
    Name: "Lysovit Syrup", Price: 100, Qty: 500, Sale: 50, Bal: 450
};
console.log(Product);
//example 2
console.log("\nExample2", "-".repeat(50));
const Brufen = {
    Name: "Brufen Syrup",
    Price: 100,
    Qty: 500,
    Sale: 50,
    Bal: 450
};
const Panadol = {
    Name: "Panadol Syrup",
    Price: 100,
    Qty: 300,
    Sale: 100,
    Bal: 400,
};
console.log(Brufen, "\n", Panadol);
