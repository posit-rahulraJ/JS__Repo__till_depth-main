// -----------------------------
// 🔒 const, let, and var
// -----------------------------

/* 
🔐 const: Value cannot be changed after declaration.
🟨 let and var are used when values can change.
    However, const is **preferred** over let/var in modern JavaScript
    for values that shouldn't change.

📌 Comparison:




Keyword   | Scope          | Hoisting               | Reassignment | Redeclaration
----------|----------------|------------------------|--------------|---------------
var       | Function-scoped| Yes                    | ✅ Yes       | ✅ Yes
let       | Block-scoped   | Yes (TDZ - uninitialized) | ✅ Yes    | ❌ No
const     | Block-scoped   | Yes (TDZ - uninitialized) | ❌ No    | ❌ No
*/

const accountI = 144553;
let bookish = 9999;
var bookisher = 4545;

// ❌ Error: Assignment to constant variable
// accountId = 2

console.log(accountI);  // 144553
console.log(bookish);    // 9999
console.log(bookisher);  // 4545
