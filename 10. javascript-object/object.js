// singleston -> uses a constructor
// Object.create() -> to create a new object 
// Object literal -> shows as a key value format as like {key:value}
//                   use comma(,) in object

const jsUser = {
    name: 'abc',
    capitalName: "ABCD",
    "age":18,
    location: 'Berhampur',
    isLoggedIn : false,
    days: ["Monday", "Tuesday"],
}
console.log(jsUser.name);          // dot notation
console.log(jsUser["location"]);   // bracket notation
console.log(jsUser.days[0]);
jsUser.capitalName = "EFGH";       // to add the value
console.log(jsUser);
// Object.freeze(jsUser);             // to keep unchange the key-value
jsUser.location = 'ASDFGHJKL';
console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello javascript");
}
console.log(jsUser.greeting);   // shows reference of function
console.log(jsUser.greeting()); // shows result with undefined data-type

jsUser.greetingTwo = function () {
    console.log(`Hello ${this.age}`);
}
console.log(jsUser.greetingTwo());


const javascriptObject = new Object();  // singleton object
javascriptObject.firstname = 'a',
javascriptObject.lastname = 'b',
console.log(javascriptObject);

const aUser = {   
    email: 'abc@gmail.com',
    fullname : {
        username: {
            firstname: 'ABC',
        }
    }
}
console.log(aUser.fullname.username.firstname);  // nested object

const objectOne = {
    nameone: 'a',
    nametwo: 'b',
}
const objectTwo = {
    namethree: 'c',
    namefour: 'd',
}
// const objectThree ={...objectOne, ...objectTwo};
const objectThree = Object.assign(objectOne, objectTwo) // assign -> combines object
console.log(objectThree);

console.log(Object.keys(jsUser));        // to get keys
console.log(Object.values(jsUser));      // to get values
console.log(Object.entries(jsUser));     // to get key-value pair

console.log(jsUser.hasOwnProperty('capitalName'));   // to check whether key or value is present or not







