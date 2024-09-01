// For of loop  -> suitable for Array
const arr = [11,12,13,14,15];
for (const element of arr) {
    console.log(element);
}

const stringType = 'hello world';
for (const element of stringType) {
    console.log(element);
}


// Maps
const arrayOne = [11,12,13,14,15];
const arrayTwo = arrayOne.map((f)=>f*5);
console.log(arrayTwo);

const map = new Map()
map.set('IN', "India");
map.set('US', "America");
map.set('Sr', "Sri Lanka");


for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}

// for in
const myObject = {
    js : 'javascript',
    css : 'styling',
    html : 'body',
}
for (const key in myObject) {
   {
        console.log(myObject[key]);
    }
}

let alpha = ['ab', 'cd', 'ef'];
for (const key in alpha) {
   {
        const element = alpha[key];
        console.log(element);
    }
}

// for-each in Array
let arr1 = [1,2,3,4,5];
arr1.forEach((item)=>{
    console.log(item+1);
})

// for-each in Object
let obj1 = {
    firstName: 'a',
    lastName:'b',
}

Object.keys(obj1).forEach ((p) => {
    console.log(p);
    console.log(obj1[p])
})

// for-each in Array of object
let arrayExample = [
    {
        first: 'ab',
        last: 'cd',
    },
    {
        first: 'ef',
        last: 'gh',
    }
]
arrayExample.forEach((item) => {
    console.log(item.first);
})

