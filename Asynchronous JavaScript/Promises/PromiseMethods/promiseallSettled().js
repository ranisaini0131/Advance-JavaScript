// prmise.all():- this will after the last promise in this case 4 sec promise
//problem:-this will tell which promise is rejected and fulilled


let data = Promise.allSettled([
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