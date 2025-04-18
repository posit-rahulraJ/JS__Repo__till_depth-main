// Memory working in JavaScript

// 🧠 Primitive types (String, Number, Boolean, etc.) => Stack memory use karte hain
// 🧠 Non-Primitive types (Objects, Arrays, Functions) => Heap memory use karte hain

// -----------------------
// 📦 Example of Stack (Primitive)
// -----------------------

let a = "rahul";
let b = a;  // 'a' ka copy 'b' ko milta hai
b = "raj";

console.log("Value of a:", a);  // 'rahul' — original value unaffected
console.log("Value of b:", b);  // 'raj' — because it's a copy

// 🔍 Explanation (Hindi):
// Stack mein jo bhi variable banta hai wo copy banata hai.
// 'b' sirf 'a' ka copy tha, isliye jab b mein change kiya, to a pe koi effect nahi pada.

// -----------------------
// 📦 Example of Heap (Non-Primitive)
// -----------------------

let userOne = {
    email: "abc@gmail.com",
    upi: "user@ybl"
};

let userTwo = userOne;  // Heap mein reference gaya — same object point ho raha hai
userTwo.email = "xyz@gmail.com";  // Isse userOne bhi change ho jaayega

console.log("User One Email:", userOne.email);  // 'xyz@gmail.com'
console.log("User Two Email:", userTwo.email);  // 'xyz@gmail.com'

// 🔍 Explanation (Hindi):
// Object heap memory mein store hota hai.
// userTwo and userOne dono same memory reference ko point karte hain.
// Isliye agar kisi ek mein change karo to dono mein dikhai deta hai.


// -----------------------
// 🧠 Stack vs Heap Diagram (ASCII Art)
// -----------------------

/*
    🧠 Memory Diagram (Simple Representation)

    ---------------------------
    |         STACK           |
    ---------------------------
    |  a = "rahul"            |  <-- Primitive value
    |  b = "raj"              |  <-- Copy of 'a'
    ---------------------------

    ---------------------------
    |         HEAP            |
    ---------------------------
    |  {                      |
    |   email: "xyz@gmail.com",| <-- Shared object
    |   upi: "user@ybl"       |
    |  }                      |
    ---------------------------
           ^        ^
           |        |
        userOne   userTwo   <-- Pointing to same object in HEAP

*/

// Interview Tip:
// 🔥 Primitive => Stack => Fast access, independent copy
// 🔥 Non-Primitive => Heap => Shared reference, more flexible

