// constant, can not be changed
const accId = 3421

let email = "diw@gmail.com"

// var is not preferred to use
/*
    why?
    because initally in js, scope issue was there..suppose if two or more variables of same name 
    are used..then changin value in one scope can change value of another variable
*/
var name = "Diwakar" 

// not a good practice
city = "delhi"

// will print data in table

console.table([accId, email, name, city])
/*
│ (index) │     Values      │
├─────────┼─────────────────┤
│    0    │      3421       │
│    1    │ 'diw@gmail.com' │
│    2    │    'Diwakar'    │
│    3    │     'delhi'     │
*/