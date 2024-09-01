let myDate = new Date (); // shows current Date
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());

let todayDate = new Date (2024,7,25, 7, 50);
console.log(todayDate.toLocaleString());

let anotherDate = new Date ("01-25-2024");
console.log(anotherDate.toLocaleString());

console.log(Date.now()); // to see miliseconds
console.log(Math.round (Date.now()/1000)); 

let times = new Date();
console.log(times.getMonth());
console.log(times.getDay());

console.log(myDate.toLocaleString('default', {weekday: 'long'}));


