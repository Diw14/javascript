let name = new String('diwakar')
console.log(name) // [String: 'diwakar']
let type = 'interpolation'

let sentence = `My name is ${name} and this is a good example of string ${type}`
console.log(sentence)

let check = 'diwakar singh'
console.log(check.charAt(1)) // i
console.log(check[1]) // i
console.log(check.includes('diwakar'))
console.log(check.indexOf('diwakar')) // 0
console.log(check.indexOf('a')) // 3
console.log(check.lastIndexOf('a')) // 5
console.log(check.match('diwakar')) // [ 'diwakar', index: 0, input: 'diwakar singh', groups: undefined ]
console.log(check.match('diwakar singh'))
console.log(check.split(' ')) // [ 'diwakar', 'singh' ]
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
//  output: "the lazy dog."

console.log(str.slice(4, 19));
//  output: "quick brown fox"

console.log(str.slice(-4));
//  output: "dog."

/*
NOTE :- Note that all comparison operators, including === and ==, compare strings case-sensitively.
 A common way to compare strings case-insensitively is to convert both to the same case (upper or lower) before comparing them.
*/
