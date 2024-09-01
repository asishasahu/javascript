const score = new Number('100'); 
console.log(score);

console.log(score.toString()); // converts to string
console.log(score.toFixed(3)); // gives the result in decimal

const number = 12378.456;
console.log(number.toPrecision(5)) //give the precise result

const anotherOne = 10000;
console.log(anotherOne.toLocaleString('en-IN')); // converts as per currency

// ***********************MATH*******************************


console.log(Math);
console.log(Math.abs(-1)); // converts - to +
console.log(Math.ceil(100.8));  // upper value
console.log(Math.floor(200.3));  // lower value
console.log(Math.round(150.6));  // round value
// console.log(Math.random()); // between 0 and 1
// console.log(Math.random()*10 +1);

const minValue = 1;
const maxValue = 5;
console.log(Math.round(Math.random()* (maxValue - minValue + 1) + minValue));