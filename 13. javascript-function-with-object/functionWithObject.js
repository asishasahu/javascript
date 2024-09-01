/*
 ... -> rest operator which gives the result in array
*/
const calculatePrice = function (...price) {   // ... -> rest operator which gives the result in array
    return price;
}
console.log(calculatePrice(200,500,300));


// pass a object within a function

// use case - 1
const alphabate = {                          
    smallAlpha : 'abcde',
    capitalAlpha : 'ABCDE',
}
  function checkAlpha (abc) {
     console.log(`Small Alphabate is ${abc.smallAlpha} and capital alphabate is ${abc.capitalAlpha}`);
  }
  checkAlpha(alphabate);

// use case - 2
function locationDetails (nuaTypeObject) {
console.log(`${nuaTypeObject.state} is our state name and i am from ${nuaTypeObject.district}`);
}
locationDetails({
    state: 'odisha',
    district: 'ganjam',
});

// pass a array within a function

const arrOne = ['ab', 'cd', 'ef'];
 function gatherArray (arr) {
   return arr;
 }
 console.log(gatherArray(arrOne));


 const newArray = [8,79,56];
 function getArray (get) {
   return get;
 }
console.log(getArray(newArray));
