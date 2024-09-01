/* 
create promise
consume promise
*/

// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation

// create a promise

const createPromise =  new Promise(function (resolve, reject) {
    setTimeout(function () {
   console.log('1st time promise created');
   resolve()
    }, 1000)
})
createPromise.then(function () {
    console.log('Promise has linked');
})

new Promise (function (resolve, reject) {          
    setTimeout(function () {
   console.log('2nd time Promise created');
   resolve()                                       // resolve is mandatory
    }, 1000)
}).then(function () {                              // .then is linked to resolve
    console.log('Promise has linked again');
})

const promiseThree = new Promise (function (resolve, reject) {
    setTimeout(function () {
        resolve({name:'promise'})
        console.log('3rd time promise created');
    })
}).then(function (user) {
    console.log(user);
})



const promiseFour = new Promise (function (resolve, reject) {
    setTimeout(function () {
        let errors = true;
        if (!errors) {
            resolve({name: 'abc', number: 12})
        } else {
            reject('ERRORS');
        }
    }, 1000)
})

promiseFour.then(function (check) {
    console.log(check);
    return check.name;
}).then(function () {
    console.log(name);
}).catch(function (erro) {
    console.log(erro);
}).finally(function (){
    console.log('Finally resolved');
})

// .then repeatedly is chaining
// .catch -> on Rejected and .finally -> after promise is settled

async function consumePromiseFive () {
   try {
    const response = await promiseFour 
   console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()



async function getAllUser () {
   try {
    const response =  await fetch('https://randomuser.me/api/');
    
   const data = await response.json()
   console.log(data);
   } catch (error) {
    console.log(error);
   }
}
getAllUser()

// fetch

fetch ('https://randomuser.me/api/')
.then (function (response) {
   return response.json()
}).then (function (data) {
    console.log(data);
}).catch(function (err) {
   return err;
})
