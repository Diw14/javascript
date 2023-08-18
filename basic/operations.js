console.log(2+3) // 5
console.log("2"+3) // 23
console.log(2+"3") // 23
console.log("2"+"3") // 23
console.log("2"+3+2) //232 [Imp]
console.log(2+3+"2") // 52  [Imp]

// ====== Be careful while performing comparing operation
console.log( "2" > 1 ) // true
console.log( "02" > 1 ) // true
console.log( 2 > "1" ) // true


console.log( null > 0 ) // false
console.log( null == 0 ) // false
console.log( null >= 0 ) // true
/*
Reason : Equality(==) and comparison operator works differently.
Comparison operator converts null to a number , treating it as 0
*/ 

console.log( undefined > 0 ) // false
console.log( undefined == 0 ) // false
console.log( undefined >= 0 ) // false
console.log(undefined == null) // true
console.log(undefined === null) // false

/*
== lineant check
=== strict check
*/
