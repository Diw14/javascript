/*
========= DATATYPES SUMMARY ============
There are 8 basic data types in JavaScript.

-> Seven primitive data types:
-> number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
-> bigint for integer numbers of arbitrary length.
-> string for strings. A string may have zero or more characters, there’s no separate single-character type.
-> boolean for true/false.
-> null for unknown values – a standalone type that has a single value null.
-> undefined for unassigned values – a standalone type that has a single value undefined.
-> symbol for unique identifiers.


And one non-primitive data type:
-> object for more complex data structures.

i) The typeof operator allows us to see which type is stored in a variable.
ii) Usually used as typeof x, but typeof(x) is also possible.
iii) Returns a string with the name of the type, like "string".
iv) For null returns "object" – this is an error in the language, it’s not actually an object.
*/

// ==================== MEMORY ===============
// stack (primitive) Heap (non primitive)

// primitive --> copy is created
let name = "diwakar"
let name1 = name
name1 = "singh"
console.log(name); // diwakar
console.log(name1) // singh

// non primitive-->reference will be given
let employee = {
    name: "diwakar",
    email: "diwakar@google.com"
}
let employee2 = employee
employee.name = "aditya"
console.log(employee) // { name: 'aditya', email: 'diwakar@google.com' }
console.log(employee2) // { name: 'aditya', email: 'diwakar@google.com' }
