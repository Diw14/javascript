// // array
// "use strict"; 
const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 7)
console.log(myArr[1]); // 1
console.log(myArr2) // [ 1, 2, 3, 4 ]
console.log(typeof myArr2) //object

myArr.push(6) // insert at end
myArr.push(7) 
myArr.pop() // pop from back

myArr.unshift(9) // insert at first
myArr.shift() // pop from front

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(3));

const newArr = myArr.join() // makes string of array elements

console.log(myArr);
console.log(newArr);

// ========= IMPORTANT ===========
// slice, splice
/*
slice -> [ ) ==> last index is exclusive . DO NOT MODIFY ORIGINAL ARRAY
splice -> [] ==> last index is inclusive . MODIFIES ORIGINAL ARRAY
*/
console.log("A ->", myArr); // [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) 

console.log(myn1); // [ 1, 2 ]
console.log("B ->", myArr); // B -> [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ->", myArr); //C -> [ 0, 4, 5 ]
console.log(myn2); //[ 1, 2, 3 ]
