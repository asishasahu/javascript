// filter 
const myNumbers = [1,2,3,4,5,6,7,8,9,10];
myNumbers.filter((num) => num%2 == 0);
console.log(myNumbers);

const numericals = [45,46,78,35,96];
let findOddNumbers = numericals.filter((od)=>od%2 != 0);
console.log(findOddNumbers);

const numb = [1,2,3,4,5,6,7,8,9,10];
let aboveFourth = numb.filter((above) => above > 4);
console.log(aboveFourth);

const cricketTeam = [
    {
        team: 'AUS',
        player: 'Steven Smith',
    },
    {
        team: 'AUS',
        player: 'Gilchrist',
    },
    {
        team: 'RSA',
        player: 'AB DE VILLIERS',
    }
]

const choosePlayer = cricketTeam.filter((r)=> r.player == 'Steven Smith');
console.log(choosePlayer);

console.log(cricketTeam.filter((op)=>op.team == 'AUS'));


let searchPlayer = cricketTeam.filter ( (fund) => {
    return fund.team == 'RSA';
})
console.log(searchPlayer);

// map
let arry = [7,8,9];
const arryMap = arry.map((q)=> {
    return q+10;
})
console.log(arryMap);

// chaining
const newTry = [5,10,15,20,25];
const anotherTry = newTry.map( (q) => q + 10)
                   .map((n)=> n+1)
                   .filter((num)=> num>25)
console.log(anotherTry);



const myNums = [5,6,7];
// const myNumber = myNums.reduce ((acc, currval) => {
//     console.log(`Value of acc is ${acc} and value of currval is ${currval}`);
//     return acc + currval;
// }, 0)

const myNumber = myNums.reduce ( (acc,currval) => {
    console.log(`Value of acc is ${acc} and currval is ${currval}`);
    return acc + currval;
}, 10)
console.log(myNumber);


// reduce method 

const webDevelopment = [
    {
        programmingName: 'html',
        programmingFees: 2500,
    },
    {
        programmingName: 'css',
        programmingFees: 1000,
    },
    {
        programmingName: 'js',
        programmingFees: 1500,
    }, 
]

const toPay = webDevelopment.reduce( (acc, item) => {
    console.log(`${acc} and ${item.programmingFees}`);
    return acc + item.programmingFees;
}, 0)
console.log(toPay);




















