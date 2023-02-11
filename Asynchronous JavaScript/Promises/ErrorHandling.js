const age = 0;
const data1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (age < 18) {
            throw new Error("data issue"); //anf if here resolve
        }
        // else {
        //     reject("child");
        // }
    }, 2000)
})

//resolving promise
data1.then((item) => {
    console.log(item) //and here throw here it will also goto catch block
}).catch((err) => {
    console.log(err)
})