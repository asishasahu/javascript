// IF-ELSE STATEMENT (for 2 cases)

const temprature = 40;
if (temprature == 50) {
    console.log('correct temprature');
} else {
    console.log('incorrect temprature');
}

// ELSE-IF STATEMENT (for multiple cases)

let minimumBalance = 249;
  if (minimumBalance>=1000) {
    console.log('Fine will be deduct');
  } else if (minimumBalance>=500) {
    console.log('200 fine will be deduct');
  } else if (minimumBalance>=250) {
    console.log('500 will be deduct');
  } else {
    console.log('Deposit money earliest');
  }

// && Operator (if all conditions are matching then it shows true)
let shoppingBag = true;
let carParking = true;
if (shoppingBag && carParking == true) {
    console.log('Allow for shopping')
} else {
    console.log('So sorry');
}

// || Operator
let clothhub1 = 'gujarat';
let clothhub2 = 'maharashtra';
if (clothhub1 || clothhub2 == 'maharashtra') {
    console.log('We found the location');
} else {
    console.log('New address please');
}

// SWITCH STATEMENT (similar like ELSE-IF)
const month = 5;
switch (month) {
    case 1: console.log('January');
    break;
    case 2: console.log('February');
    break;
    case 3: console.log('March');
    break;
    case 4: console.log('April');
    break;
    case 5: console.log('May');
    break;
    case 6: console.log('June');
    break;
    default: console.log('Find in dictionary')
    break;
}

/* 
  fALSY VALUEs = false, 0, bigInt (0n), null, undefined, NaN, ""
  tRUTHY VALUEs = " ", [], {}, function()
*/

// Truthy value
let name = 'abc';
if (name) {
    console.log('it has displayed');
}

let userDetails = [];
if (userDetails.length == 0) {
    console.log('Its an empty array');
}

let objectOne = {};
if (Object.keys(objectOne).length == 0 ) {
    console.log('Empty object');
}

// Nullish coalescing operator (??)

const trial1 = 5 ?? 10;
console.log(trial1);
const trial2 = 15 ?? 20;
console.log(trial2);
const trial3 = null ?? 5;
console.log(trial3);
const trial4 = null ?? undefined;
console.log(trial4);
const trial5 = undefined ?? 15;
console.log(trial5);


// TERNARY OPERATOR (as similar to if-else statement)

const lemonTeaPrice = 10;
lemonTeaPrice>=10 ? console.log('Its correct') : console.log('Its incorrect');

const number = 7;
number%2 == 0 ? console.log('Reminder is zero') : console.log('Reminder is one');

