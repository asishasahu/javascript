/* 
   Function declaration - without variable
   Function expression - using varaibale
*/ 

// Function declaration examples
function addTwo (num) {
    return num+3;
}
console.log(addTwo(3));


function addFourNumber (num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}
console.log(addFourNumber(10,20,30,40));


// Function expression examples
const add = function addThree (nums) {
    return nums + 4;
}
console.log(add(5));


const addFiveNumber = function fiveNum (n1, n2, n3, n4, n5) {
    return (`${n1+n2+n3+n4+n5}`);
}
console.log(addFiveNumber(1,2,3,4,5));