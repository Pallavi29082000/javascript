// console.log(2 > 1);   // output - true
// console.log(2 >= 1);  // output - true
// console.log(2 < 1);   // output - false
// console.log(2 == 1);  // output - false
// console.log(2 != 1);  // output - true


// console.log("2" > 1);  // output - true [the string automatically convert into number before comparison]
// console.log("02" > 1);  // output - true

// *********************Notes**********************************
// we avoid this type of comparison because we did not know when it convert null into NaN and when it convert into 0

// console.log(null > 0);   // output - false
// console.log(null == 0);   // output - false
// console.log(null >= 0);   // output - true


// console.log(undefined == 0);  // output - false
// console.log(undefined > 0);   // output - false
// console.log(undefined < 0);   // output - false

// *********************Notes*************************
//  "===" this compares equal with type it means it check number as well as type of the number .here the first 2 is string and the second 2 is number so the comparison is not possible for that]

console.log("2" === 2); // output - false