const name = 'javascript'
let type = 'web development'
console.log(`${name} is the logical part of ${type}`); // backtick

// new -> to create an instance of an object that has a constructor function

const nuaDetails = new String ('abcd');
console.log(nuaDetails);
console.log(nuaDetails.__proto__); // to see all the functions related to string
console.log(nuaDetails.length); // to check the total length of variable
console.log(nuaDetails.toUpperCase()); // before use of any function always use ()
console.log(nuaDetails.charAt(1)); // gives the character based on the index number as numerical value
console.log(nuaDetails.indexOf('c')); // to get the index number of string by writting the alphabate
console.log(nuaDetails.substring(0, 3)); // gives the 1st value and -1 of the last value

// 2.20 is pending.

const newDetail = nuaDetails.slice(0, 2); // gives result of 1st value and last value - 1
console.log(newDetail);

const nameOne = "   rfc "; 
console.log(nameOne.trim()); // deletes unwanted things

const url = "https://abc.com"
console.log(url.replace('abc', 'def')); // to replace item
console.log(url.includes('abc')); // to check parameter is present

let oldName = 'java-script-web-development';
console.log(oldName.split('-'));   // split and creates an array


