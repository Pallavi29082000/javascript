"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser so it does not work as pop-up alert 

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")// it print hitesh


let name = "hitesh"//automatically taken as string
let age = 18 //automatically taken as number
let isLoggedIn = false //automatically taken as boolean
let state; // 

/* =======types of datatype========*/
// premetive datatype

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value[representation of empty value]
let states=""; //this is not null it is string
// undefined => means value is not assigned yet like state
// symbol => unique 


// object
// typeof
console.log(typeof state); // undefined because it is undefined variable
console.log(typeof undefined); // undefined
console.log(typeof null); // object because it error of javascript