let date = new Date()
console.log(date); //2023-08-20T17:16:16.834Z
console.log(date.toString()); //Sun Aug 20 2023 22:46:54 GMT+0530
console.log(date.toDateString()); // Sun Aug 20 2023
console.log(date.toTimeString()) //22:48:03 GMT+0530 (India Standard Time)
console.log(date.toLocaleDateString()) //20/08/2023
console.log(date.getDate()) // 20 (today's date)
console.log(date.getFullYear()) // 2023
console.log(typeof date) // object -> impt

let mydate = new Date(2023, 0, 20); // month started from 0
console.log(mydate.toDateString()) // Mon Jan 20 2023
let anotherDate = new Date("2023-01-20")
console.log(anotherDate.toDateString()) //Fri Jan 20 2023
let epochTime = Date.now()
console.log(epochTime); // 1692552682314
console.log(anotherDate.getTime()) //1674172800000
 
