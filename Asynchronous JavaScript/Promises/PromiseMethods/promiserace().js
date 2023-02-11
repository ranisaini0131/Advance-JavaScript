// prmise.race()= this is type of race 
//those promise will resolve first it will goes to catch block and shown on console



let data = Promise.race([
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
            reject("7 sec")
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