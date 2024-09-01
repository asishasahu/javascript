/* 
write something outside {} -> global scope
write something inside {} -> block scope
let is a block scope
const is a block scope
var is a global scope
*/

let a = 30;
const b = 20;
var t = 600;
if (true) {
   let a = 300;
   const b = 200;
   var t = 60;
   console.log(a);
console.log(b);
console.log(t);
}
console.log(a);
console.log(b);
console.log(t);

















