// Promise chaining is helps us to overcome the callback hell


let n = 30, sum = 0;
const data3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (n > 18) {
            resolve("greater");
            return n + 10;
        } else {
            reject("smaller");
            return n + 12;
        }
    })
})


//promise chaining
data3.then((sum) => {
    console.log("1st " + n);
    return sum + 10;  //reurn keyword most imp
}).then((sum) => {
    console.log("2nd " + n);
    return sum + 10;
}).then(() => {
    console.log("3rd " + n);
    return sum + 10;
}).catch((err) => {
    console.log("catch block", err)
})

