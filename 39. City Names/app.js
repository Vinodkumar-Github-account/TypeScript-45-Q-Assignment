"use strict";
// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city, country) {
    console.log(`"${city},${country}"`);
}
city_country("karachi", "pakistan");
let myCities = city_country("karachi", "pakistan");
console.log(myCities);
console.log(city_country("lahor", "pakistan"));
console.log(city_country("dubai", "UAE"));
console.log(city_country("london", "UK"));
