/*
 PRIMITIVE : string, number, boolean, null, undefined, symbol, bigInt, NaN
 REFERENCE/ NON-PRIMITIVE : array, object, function
*/

let score = 100; // number
let isLoggedIn = false; // boolean
let rating; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); 

const bigNumber = 123456789741852963n; // bigInt
console.log(bigNumber);

const alphabates = ["a", "b", "c"]; // array
let obj = {     // object
    name: 'abc',
    age: 50,
}
const myFunction = function () {    // function

}

// STACK memory is based on PRIMITIVE, HEAP memory is based on NON-PRIMITIVE.

// stack -> creates a copy
let names = "javascript";
let programming = names;
programming = "fullname";

console.log(names);
console.log(programming);

// heap -> creates a reference
let userOne = {
    name: 'user1',
    email: 'userone@gmail.com',
}
let userTwo = userOne;
userOne.email = "userThree@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);





