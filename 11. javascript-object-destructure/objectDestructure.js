const alphabetical = {
    firstName: 'abc',
    middleName: 'jkl',
    lastName: 'xyz',
}

// Object destructuring -> extract multiple properties from an object and assign them to variables
const {firstName: first, middleName: middle, lastName: last} = alphabetical;
console.log(first, middle, last);

// JSON -> JavaScript Object Notation (transmitting data between a server and a web application)
// {
//     "alphabetical": 'abc',     // JSON format in object
// }

// [
//     "abc",
//     "def",                     // JSON format in array
//     "ghi",
// ]

