let score = "33abc"
console.log(typeof score);
console.log(typeof (score));

let anotherScore = "40";
console.log(typeof anotherScore);
console.log(typeof (anotherScore));

let valueOfScore = Number(score);
console.log(typeof valueOfScore);
console.log(valueOfScore);

/*
33 => number
33abc => NaN
*/

let isLoggedIn = 0;
let checkBoolean = Boolean (isLoggedIn);
console.log(checkBoolean);
// 1 => true, 0 => false

let newNumber = 33;
let anotherNew = String(newNumber);
console.log(typeof anotherNew);


let isOk = "asd";
let isEverythingOk = Boolean(isOk);
console.log( typeof isEverythingOk);

// *******************Operation********************

let value = 3;
let negativeValue = -value;
console.log(negativeValue);

console.log(2**5); // 2 to the power 5
console.log(2/2);
console.log(2%2); // to check reminder

let str1 = "Java"
let str2 = "script"
let str3 = str1 + str2; // to combine both variables
console.log(str3); 

console.log("1" + 2 + 2); // 122 => converts string in separate way 
console.log(2 + 2 + "1"); // 41

console.log(3+4*5-3);

let gameCounter = 100;
gameCounter++; // postfix => increment by 1
console.log(gameCounter);

let x = 3;
let y = x+=2; 
console.table([x, y]);

let a = 5;
let b = ++a; // prefix
console.table([a,b]);






