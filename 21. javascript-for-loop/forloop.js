// FOR LOOP (initialise, condition, increment/ decrement)

for (let i = 0; i < 10; i++) {
    const element = i;
    if (i == 5) {
        console.log('5 is here');
    }
    console.log(element);
}

// NESTED FOR LOOP 
for (let i = 0; i <=10; i++) {
    console.log(`Value of outer loop is ${i}`);
   for (let j = 0; j <=10; j++) {
   console.log(`Inner loop value is ${j}`);
    
   }
}


// for {initialization, condition, increment/ decrement}

for (let i = 0; i<3; i++) {
    console.log(i);
    for (let j=0;j<4;j++) {
        console.log(j);
    }
}

for (let i=0;i<=2; i++) {
    console.log(i);
    for (let j=0;j<=3;j++) {
        console.log(`inner detail is ${j} and outer detail is ${i}`);
    }
}

// Implement of for loop in array
let smallAlphabate = ['a', 'b', 'c', 'd'];
console.log(smallAlphabate.length);
for (let index = 0; index < smallAlphabate.length; index++) {
    const element = smallAlphabate[index];
    console.log(element);
}

// break -> renders that much untill break meets
for (let i=0; i<10;i++) {
    if (i==5) {
        console.log(`5 is in upcoming pipe-line`);        
        break;
    }
    console.log(i);
}

// continue -> renders all I untill the condition met
for (let j=0;j<15;j++) {
    if (j==8) {
        console.log(`8 out of 15`);
        continue;
    }
    console.log(j);
}


// NESTED FOR LOOP & 1 to 10 table should implement.
// 7.38 is pending.
// 90 minutes is pending of Part - 1 (Do, Do-while loop, Higher Order Array Loops, Array Methods)
