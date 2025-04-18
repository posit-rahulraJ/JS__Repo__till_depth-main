// ----------------------------
// ➕ Arithmetic Operations
// ----------------------------
let value = 3;
let negValue = -value;
console.log(negValue); // 👉 -3

// ----------------------------
// 🔗 String Concatenation
// ----------------------------
let str1 = "hello";
let str2 = "rahul";
let str3 = str1 + str2;
console.log(str3); // 👉 hellorahul

// -------------------------------------------
// 🧠 Type Coercion in Mixed-Type Expressions
// -------------------------------------------
console.log("1" + 2);       // 👉 "12" (string + number → string)
console.log(1 + '2');       // 👉 "12"
console.log("1" + 2 + 2);   // 👉 "122" → left to right: "1" + 2 = "12" + 2 = "122"
console.log(1 + 2 + "2");   // 👉 "32" → left to right: 1 + 2 = 3 + "2" = "32"

// ----------------------------
// 🔍 Boolean & Unary Operator
// ----------------------------
console.log(true);      // 👉 true
console.log(+true);     // 👉 1 (true is coerced to 1)
console.log(+"");       // 👉 0 (empty string is coerced to 0)

// ----------------------------
// 🧮 Chained Assignment
// ----------------------------
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); // 👉 4 4 4

// ----------------------------
// 🔄 Postfix & Prefix Increment
// ----------------------------
let gameCounter = 100
