// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); // output is in nehative that is -3.
// console.log(2+2); //  output - 4
// console.log(2-2); //   output - 0
// console.log(2*2); //   output - 4
// console.log(2**3); //  output - 8
// console.log(2/3); //   output - 0.666666666666
// console.log(2%3); //   output - 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);  // hello hitesh

// console.log("1" + 2);  // output  -  12  [ because string does not add with number it find string first so it concatenate ]
// console.log(1 + "2");  // output  -  12
// console.log("1" + 2 + 2);  // output  -  122
// console.log(1 + 2 + "2");  // output  -  32 [ because number add with number so it gives 3 first after that it find string it does not add with number so it concatenate]

// console.log( (3 + 4) * 5 % 3); // output  -  2

// console.log(+true); // output  -  1 [because boolean converted to number ]
// console.log(+""); // output  -  0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
let y = gameCounter;
let gameCounters = 100
++gameCounter; // [prefix increament]
gameCounters++; // [post increament]
console.log(y);  // output  -  100
console.log(gameCounters);  // output  -  101 

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion