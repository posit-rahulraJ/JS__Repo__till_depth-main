console.log("2" > 1);       // 👉 true (string "2" coerced to number 2)
console.log("02" > 1);      // 👉 true ("02" → 2 > 1)


//niche jitne bhi hai comparisionb avoid karo
console.log(null > 0);      // 👉 false
console.log(null == 0);     // 👉 false
console.log(null >= 0);     // 👉 true

console.log(undefined == 0);   // 👉 false
console.log(undefined > 0);   // 👉 false
console.log(undefined >= 0);  // 👉 false


/*💡 Pro Interview Insight:
Q: Why is null >= 0 true, but null > 0 is false?

Because comparison operators (<, >, <=, >=) convert null to a number, i.e., 0

But == doesn’t convert null to number when compared with a number — it only equals undefined 

Expression	Explanation
"2" > 1	"2" gets coerced to 2, so 2 > 1 → ✅ true
null > 0	null becomes 0, so 0 > 0 → ❌ false
null == 0	null is only loosely equal to undefined, not to 0
null >= 0	null becomes 0, so 0 >= 0 → ✅ true
undefined == 0	❌ false → undefined only loosely equals null
undefined > 0	❌ false → undefined coerces to NaN, and NaN > 0 is always false
undefined >= 0	❌ false → NaN >= 0 is false too

*/