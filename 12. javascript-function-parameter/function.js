// Function defines a block of code to be execute in a certain time based on call.

/*
  Syntax of function:
  function function-Name (parameter) {    -> to add a name of arguments as a parameter
   <code as per the requirement>
  }
   function-Name()                        -> pass arguments to get the output value
*/


// Use case - 1
function functionName () {        // function & functionName -> function-name
    console.log("a")
    console.log("b")
    console.log("c")
    console.log("d")
}
functionName();                   // functionName -> reference of function & () -> execute


// Use case - 2 (including parameters)
function addTwoNumbers (number1, number2) {  // (number1, number2) -> parameters
    console.log(number1 + number2);
}
addTwoNumbers(5,10);              // (5, 10) -> arguments


// Use case - 3 
function addTwoValue (num1, num2) {  
    let result = num1 + num2;
    return result;
    console.log("demo");               // console.log will not be work-out within function after return
}
const result = addTwoValue(30,50);
console.log(result);

// declaring the variable outside of the function and pass arguments to get the output in console


// Use case - 4
function userDetails (username = 'ABC') {
    return (`${username} has recently logged in`);
}
console.log(userDetails('DEF'));        // username will over write parameter as it strongly follow arguments




// 4.54 is pending.











