// -------------------------------------
// 🔄 Type Conversions & Coercion in JS
// -------------------------------------

let score = true;

console.log(typeof score);           // boolean
console.log(typeof (score));         // boolean

// Convert boolean to number
let valueInNumber = Number(score);
console.log(typeof valueInNumber);   // number
console.log(valueInNumber);          // 1

/* 
📌 Type Conversion Examples (Manual):
-------------------------------------
'33'      => 33 (valid number)
'33abc'   => NaN (Not a Number)
true      => 1
false     => 0
null      => 0
undefined => NaN
*/

// Boolean Conversion
let isLoggedIn = 1;                  // Try: "", "rahul", 0, null

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);      // true (for 1, "rahul"), false (for "", 0, null)

// Number to String Conversion
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);           // "33"
console.log(typeof stringNumber);    // string
