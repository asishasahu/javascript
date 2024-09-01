function getScore (username, score) {
    this.username = username;
    this.score = score;
    return this;
}
getScore.prototype.score = function () {
    return score++;
}
const newScore = new getScore ('qwe', 20);
console.log(newScore);


function personName (name, age) {                              // personName -> constructor
    this.name = name;
    this.age = age;
}
const newName = new personName('ABC', 30);                     // new -> creates new object            
console.log(newName);
const oneMore = new personName('DEF', 50);
console.log(oneMore);


//
let myName = 'abc       ';
console.log(myName.length);
console.log(myName.truelength);
console.log(myName.trim().length);



