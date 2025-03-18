let score = 33
// console.log(typeof score);
// console.log(typeof (score));// as method
// this gives number as a result

// ====================Number conversion======================

let scores = "33abc"
// console.log(typeof scores); // it gives string
let valueInNumber = Number(scores);// change in number
// console.log(typeof valueInNumber); // it gives number
// console.log(valueInNumber); // output is NaN [not a number]

// =======================================================

let age = null;
// console.log(typeof age); // it gives object
let valueInNumbers = Number(age);// change in number
// console.log(typeof valueInNumbers); // it gives number
// console.log(valueInNumbers); // output is 0

// =====================================================

let ages = undefined;
// console.log(typeof ages); // it gives undefined
let valueInNum = Number(ages);// change in number
// console.log(typeof valueInNum); // it gives number
// console.log(valueInNum); // output is NaN

// ----------Noted---------------
// "33" => 33
//  "33abc" => NaN
//  true => 1 ; false => 0;

// ====================Boolean conversion======================

let isLoggedIn = null
let booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanisLoggedIn);
// console.log(booleanisLoggedIn); // true

// ------------Noted----------

//  1 => true; 0 => false;
//  "" => false
// "hitesh" => true
//  5 => true
// undefined => false
// null => false

// ====================String conversion======================

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// 33 => lookes like a number but after conversion it is a string