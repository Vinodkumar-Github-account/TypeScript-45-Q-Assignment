"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let string1 = "apple";
let string2 = "banana";
let string3 = "apple";
console.log(string1 === string2); // false
console.log(string1 !== string2); // true
console.log(string1 === string3); // true
console.log(string1 !== string3); // false
// • Tests using the lower case function
let text1 = "HELLO";
let text2 = "hello";
let text3 = "HeLLo";
console.log(text1.toLowerCase() === text2.toLowerCase()); // true
console.log(text1.toLowerCase() === text3.toLowerCase()); // true
console.log(text1.toLowerCase() !== text3.toLowerCase()); // false
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;
let num3 = 10;
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num3); // true
console.log(num1 <= num2); // false
console.log(num1 === num3); // true
console.log(num1 !== num3); // false
// • Tests using "and" and "or" operators
let x = 5;
let y = 10;
console.log(x > 3 && y < 15); // true
console.log(x > 3 && y > 15); // false
console.log(x > 3 || y > 15); // true
console.log(x < 3 || y < 15); // false
// • Test whether an item is in a array
let array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // true
console.log(array.includes(6)); // false
console.log(array.includes(1)); // true
// • Test whether an item is not in a array
let arr = [1, 2, 3, 4, 5];
console.log(!array.includes(3)); // false
console.log(!array.includes(6)); // true
console.log(!array.includes(1)); // false
