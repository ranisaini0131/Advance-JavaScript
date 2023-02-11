// prmise.all():- this will after the last promise in this case 4 sec promise
//problem:- if one of all these promises 1 prmise is rejected then it will directly go into the catch block and tell this promises is rjected and don't inform about the other promises


let data = Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve
                ("2 sec")
        }, 2000)
    }),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve
            //     ("1sec")
            reject("1 sec")
        }, 1000)
    }),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve
                ("4 sec")
        }, 4000)
    }),

])

data.then((items) => {
    console.log("then block", items)
}).catch((err) => {
    console.log("catch block", err)
})

//to overcome this allsettle is introduced