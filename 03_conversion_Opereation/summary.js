// ==============================
// DATATYPES AND CLASSIFICATION
// ==============================

// JS follows ECMAScript standards (tc39.es)
// It is a **loosely typed** or **dynamically typed** language
// TypeScript is **statically typed**

/*
  Official Classification:

  ➤ Primitive (Call by Value):
     - Changes made to copied value (not original)

     1. String
     2. Number
     3. Boolean
     4. null
     5. undefined
     6. Symbol
     7. BigInt

  ➤ Non-Primitive / Reference (Call by Reference):
     - Reference (address) is passed, not value directly

     1. Array
     2. Object
     3. Function
*/

// Example of undefined:
let userEmail;  // declared but not assigned
console.log(userEmail); // undefined

// ==============================
// SYMBOLS AND UNIQUENESS
// ==============================

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false ➝ Symbols are always unique

// ==============================
// BIGINT
// ==============================

const bigNumber = 66568468468468465465n; // Use 'n' for BigInt
console.log(typeof bigNumber); // bigint

// ==============================
// ARRAY, OBJECT, FUNCTION
// ==============================

const heros = ["a", "b", "c"];
console.log(typeof heros); // object

const user = {
    name: "rahul",
    age: 22,
};
console.log(typeof user); // object

// Functions can be treated as variables
const myFunction = function () {
    console.log("Hello world");
};
myFunction(); // Function call

// ==============================
// typeof Operator
// ==============================

let scorevalue = 99;
console.log(typeof scorevalue); // number

// ==============================
// INTERVIEW-STYLE QUESTIONS
// ==============================

console.log(typeof null);       // object  ❗️(known JS quirk)
console.log(typeof undefined);  // undefined
console.log(typeof NaN);        // number
console.log(typeof heros);      // object
console.log(typeof myFunction); // function
console.log(typeof bigNumber);  // bigint
console.log(typeof Symbol("x")); // symbol

// ==============================
// INTERVIEW READY: THEORETICAL
// ==============================

/*
⭐ What is the difference between '==' and '==='?
   ➤ '==' checks only value
   ➤ '===' checks both value and data type

⭐ What is the output of:
   console.log(null == undefined); // true
   console.log(null === undefined); // false

⭐ Why is typeof null 'object'?
   ➤ It's a historical bug in JavaScript, kept for backward compatibility

⭐ Is JavaScript statically or dynamically typed?
   ➤ Dynamically typed (types assigned at runtime)

⭐ Can functions be assigned to variables?
   ➤ Yes, because functions are first-class citizens in JS

⭐ What are truthy and falsy values?
   ➤ Falsy: false, 0, "", null, undefined, NaN
   ➤ Everything else is truthy
*/

// ==============================
// BONUS: CONST VS LET VS VAR RECAP
// ==============================

/*
Keyword    Scope           Hoisting                Reassignment    Redeclaration
var        Function-scoped Yes                     Yes             Yes
let        Block-scoped    Yes (uninitialized)     Yes             No
const      Block-scoped    Yes (uninitialized)     No              No
*/



// ==============================
// DATATYPES AND TYPEOF
// ==============================

"use strict"; // treat all js code as newer versions

console.log("RAHUL");

console.log(typeof "A");
console.log(typeof null);      // object (interview)
console.log(typeof undefined); // undefined (interview)


// ==============================
// VAR vs LET vs CONST
// ==============================

/*
Keyword    Scope           Hoisting                Reassignment    Redeclaration
var        Function-scoped Yes                     Yes             Yes
let        Block-scoped    Yes (uninitialized)     Yes             No
const      Block-scoped    Yes (uninitialized)     No              No
*/

const accountId = 144553;
let bookish = 9999;
var bookisher = 4545;
// accountId = 2 // ❌ not allowed
console.log(accountId);
console.log(bookish);
console.log(bookisher);


// ==============================
// TYPE CONVERSION & OPERATIONS
// ==============================

let score = true;
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber);        // 1

let isLoggedIn = 1;
// let isLoggedIn = "" // false
// let isLoggedIn = "rahul" // true

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);       // "33"
console.log(typeof stringNumber); // string


// ==============================
// BASIC OPERATORS
// ==============================

let value = 3;
let negvalue = -value;
console.log(negvalue); // -3

let str1 = "hello";
let str2 = "rahul";
let str3 = str1 + str2;
console.log(str3); // hellorahul

console.log("1" + 2);       // "12"
console.log(1 + '2');       // "12"
console.log("1" + 2 + 2);   // "122"
console.log(1 + 2 + "2");   // "32"

console.log(true);          // true
console.log(+true);         // 1
console.log(+"");           // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++; // postfix
++gameCounter; // prefix
console.log(gameCounter); // 102


// ==============================
// COMPARISONS & PITFALLS
// ==============================

console.log("2" > 1);        // true
console.log("02" > 1);       // true

console.log(null > 0);       // false
console.log(null == 0);      // false
console.log(null >= 0);      // true

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined >= 0); // false


// ==============================
// DATA TYPES: PRIMITIVE VS REFERENCE
// ==============================

// Primitive (call by value): copy is passed
// 1. String, 2. Number, 3. Boolean, 4. null, 5. undefined, 6. Symbol, 7. BigInt

// Reference (call by reference)
// 1. Array, 2. Object, 3. Function

let userEmail;
console.log(userEmail); // undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false

const bigNumber = 66568468468468465465n;

const heros = ["a", "b", "c"];
const user = {
    name: "rahul",
    age: 22,
};

const myFunction = function () {
    console.log("Hello world");
};

myFunction();


// ==============================
// INTERVIEW QUESTIONS SECTION
// ==============================

console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
console.log(typeof NaN);        // number
console.log(typeof bigNumber);  // bigint
console.log(typeof heros);      // object (Array is type object in JS)
console.log(typeof myFunction); // function

// JS is loosely typed (dynamic)
// TypeScript is statically typed

// Bonus: Truthy and Falsy
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy



