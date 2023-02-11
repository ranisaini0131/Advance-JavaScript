
//definition:=
const age = 0;
const data1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (age < 18) {
            resolve("Adult");
        }
        // else {
        //     reject("child");
        // }
    }, 2000)
})

data1.finally((items) => {
    console.log('final block', items)
})

//resolving promise
data1.then((item) => {
    console.log(item)
}).catch((err) => {
    console.log(err)
})