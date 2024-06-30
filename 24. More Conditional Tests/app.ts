// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


// • Tests for equality and inequality with strings
let string1: string = "apple";
let string2: string = "banana";
let string3: string = "apple";

console.log(string1 === string2);    // false
console.log(string1 !== string2);   // true
console.log(string1 === string3);   // true
console.log(string1 !== string3);   // false

// • Tests using the lower case function
let text1: string = "HELLO";
let text2: string = "hello";
let text3: string = "HeLLo";

console.log(text1.toLowerCase() === text2.toLowerCase());   // true
console.log(text1.toLowerCase() === text3.toLowerCase());   // true
console.log(text1.toLowerCase() !== text3.toLowerCase());   // false

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 5;
let num3: number = 10;

console.log(num1 > num2);    // true
console.log(num1 < num2);    // false
console.log(num1 >= num3);   // true
console.log(num1 <= num2);   // false
console.log(num1 === num3);  // true
console.log(num1 !== num3);  // false

// • Tests using "and" and "or" operators
let x: number = 5;
let y: number = 10;

console.log(x > 3 && y < 15);   // true
console.log(x > 3 && y > 15);   // false
console.log(x > 3 || y > 15);   // true
console.log(x < 3 || y < 15);   // false

// • Test whether an item is in a array
let array: number[] = [1, 2, 3, 4, 5];

console.log(array.includes(3));   // true
console.log(array.includes(6));   // false
console.log(array.includes(1));   // true

// • Test whether an item is not in a array
let arr: number[] = [1, 2, 3, 4, 5];

console.log(!array.includes(3));   // false
console.log(!array.includes(6));   // true
console.log(!array.includes(1));   // false