"use strict"; // to treat all JS code as new version of js

/*
alert(3+3) // will not work in nodejs, but will work in browser
*/

// ===== PRIMITIVE =======
// number => 2 to power 53
// bigint -> to store values > 2^53
// string => ""
// boolean => true/false
// null => standalone value
// undefined => not initialised
// symbol => unique

// ===== DERIVED =====
// object

// both syntax are correct
console.log(typeof undefined); // undefined
console.log(typeof (undefined));

console.log(typeof null); // object


// === MORE ABOUT DATATYPE ======
let test = 33
let test1 = "33"
let test2 = "33abc"
let test3 = undefined
let test4 = null

console.log(typeof test); // number
console.log(typeof test1); // string
console.log(typeof test2); // string
console.log(typeof test3); // undefined --> one of type
console.log(typeof test4); // object ----> null is object


console.log(typeof(Number(test1))) // number

console.log(typeof(Number(test2))) // number
console.log(Number(test2)) // Nan (not a number)

console.log(typeof(Number(test3))) // number
console.log(Number(test3)) // Nan

console.log(typeof(Number(test4))) // number
console.log(Number(test4)) // 0
