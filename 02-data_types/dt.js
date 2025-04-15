/*🎯 Interview Notes:
typeof null returns "object" – a known JavaScript bug.

typeof undefined is "undefined" – it's the default type for unassigned variables.

Always use "use strict" for better error handling and to avoid silent errors.

Use let and const instead of var (as we discussed earlier).

Use Symbol when you want to avoid property name collisions in objects. */




"use strict"; // Treat all JS code as per the latest standards

// alert(3 + 3); // Will work in browser, but not in Node.js

// Code readability should be high — always write clean, well-spaced code

// Reference for standards: https://tc39.es

console.log("RAHUL"); // Sample output

// -----------------------------
// 🧠 Data Types in JavaScript
// -----------------------------

// 1. Number – All numbers including integers and floats
// Max safe integer is 2^53 - 1
let num = 42;

// 2. BigInt – For very large integers
let bigNum = 9007199254740991n;

// 3. String – Textual data, can use "" or ''
let name = "Rahul";

// 4. Boolean – true or false
let isAvailable = true;

// 5. null – Intentional absence of value (typeof is object — INTERVIEW POINT)
let age = null;

// 6. undefined – A variable declared but not assigned a value
let score;

// 7. Symbol – Unique and immutable value (used for object property uniqueness)
let sym = Symbol("id");

// 8. Object – Collection of key-value pairs
let person = {
  name: "Rahul",
  age: 22
};

// -----------------------------
// 🧪 Type Checking
// -----------------------------
console.log(typeof "A");         // string
console.log(typeof null);        // 🔥 object (INTERVIEW FAVORITE)
console.log(typeof undefined);   // undefined
