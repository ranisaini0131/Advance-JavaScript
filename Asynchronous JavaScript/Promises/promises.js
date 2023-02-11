 //Why we use use promises:-
//  The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//===================Problem
let data = 1;
console.log(data);//1
setTimeout(() => {
    console.log("timer", data);
}, 2000)//it also gives 3 becoz statement 8 changes the value of data variable which replace this data variable also, so this is the drawback of asynchronous language.to overcome this drawback promises introduces

data = 3;
console.log("last", data)//3

//====================how to use promises 
//producing promise
const age = 0;
const data1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (age > 18) {
            resolve("Adult");
        } else {
            reject("child");
        }
    }, 5000)
})

//resolving promise
data1.then((item) => {
    console.log(item)
}).catch((err) => {
    console.log(err)
})
