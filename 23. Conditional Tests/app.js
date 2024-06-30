"use strict";
// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//test 1: Equality compatision (True)
let car = 'subaru';
console.log("is car == 'subaru? i predict true");
console.log(car == 'subaru');
// test 2: Strict equality comparision (True)
console.log("is car === 'subaru' ? i predic True.");
console.log(car === 'subaru');
// test 3: equality comparision (False)
console.log("is car != 'subaru' ? i predic False.");
console.log(car != 'subaru');
// test 4: strict inequality comparision (False)
console.log("is car !== 'subaru' ? i predic False.");
console.log(car !== 'subaru');
// test 5: Less then comparision (False)
console.log("is car < 'subaru' ? i predic False.");
console.log(car < 'subaru');
// test 6: Greater then comparision (False)
console.log("is car > 'subaru' ? i predic False.");
console.log(car > 'subaru');
// test 7: Less then or equal comparision (True)
console.log("is car <= 'subaru' ? i predic False.");
console.log(car <= 'subaru');
// test 8: Greater then or equal comparision (True)
console.log("is car >= 'subaru' ? i predic False.");
console.log(car >= 'subaru');
// test 9: Checking truthiness (True)
console.log("is car? I predic True.");
console.log(car = 'subaru');
// test 10: Checking falsiness (False)
console.log("is !car? I predic False.");
console.log(!car);
