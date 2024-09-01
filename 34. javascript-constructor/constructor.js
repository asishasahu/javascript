const userOne = {
    name: 'ABC',
    age: 26,
    specification: function () {
        // console.log(`This is good beacuse of ${userOne.name}`);
        // console.log(`Userone is ${this.name}`)
    }
}
// console.log(userOne.name);
// console.log(userOne.specification());
// console.log(this);

function user (name, age) {
    this.name = name;
    this.age = age;
}

const userDetailOne = new user('qwe', 70);
console.log(userDetailOne);
