const user = {
    firstName: 'abc',
    lastName: 'xyz',
    getName: function (names) {
       console.log(`${this.firstName} is first 3 letters of alphabate`);
       console.log(this);
    }
}

user.getName();

/*
   Syntax of Arrow Function => variable - () => {}
*/

// in Explicit return, keyword 'return' is mandatory
const aUser = (num) => {        
   return num+2;
}
console.log(aUser(6));

// in Implicit return, keyword 'return' is not mandatory but it must be in a single line
const addThree = (num1, num2, num3) => num1 + num2 + num3;   
console.log(addThree(10,20,30));



