const myArr = [1,2,3,4,5];
console.log(myArr[0]); // to get element name by accessing index

const anotherOne = new Array ("ab", "cd", "ef"); // to create an array using new
console.log(anotherOne[1]); 
console.log(anotherOne.length);

myArr.push(6); // to add an element in an array
myArr.push(7);
myArr.pop();  // remove the element which has last added
console.log(myArr);

myArr.unshift(7); // to add an element at zero-th index
console.log(myArr);
myArr.shift();
console.log(myArr); // remove the element unshift 

console.log(myArr.includes(3)); // to check whether element is present or not
console.log(myArr.indexOf(3));

const newArray = myArr.join();
console.log(myArr);
console.log(newArray);
console.log(typeof myArr);
console.log(typeof newArray);


let arr1 = [11,12,13,14,15];
console.log(arr1.slice(1,4)); // gives 1st value and last value-1

let arr2 = [16,17,18,19,20];
console.log(arr2.splice(1,3)); // shows the value based on input

const seas = ['pacific', 'golf']
const sea = ['indian', 'bay of bengal', 'atlantic']
let seabeach = seas.concat(sea);   // merge 2 arrays
console.log(seabeach);

const smallAlpha = ["a", "b", "c"];
const capitalAlpha = ["A", "B", "C"];
const alpha = [...smallAlpha, ...capitalAlpha]; // spread -> merges arrays
console.log(alpha);

const anotherOneArray = [1,2,3,[4,5,7,8],9,[3,7,5],[1,2]];
console.log(anotherOneArray.flat(Infinity));   // flat -> renders in a single array

console.log(Array.isArray('javascript'));  // to check array or not
console.log(new Array("javascript")); // to craete new array
console.log(Array.from('javascript'));

let score1 = 100;
let score2 = 200;
let score3 = 300;

const allScore = Array.of(score1, score2, score3); // Array.of creates a new array
console.log(allScore);
const alScore = new Array (score1, score2, score3); // new Array also creates a new array which is the instance of a object
console.log(alScore);

const arrayfrom = "123";
console.log(Array.from(arrayfrom));  // Array.from splits into a single single element in an array







