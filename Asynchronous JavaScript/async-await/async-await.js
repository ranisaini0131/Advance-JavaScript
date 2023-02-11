async function getData() {
    //1st promise
    let handlePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("All Set");
        }, 1000);

    });
    //2nd promise
    let handlePromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("All Set");
        }, 1000);

    })
    //for many promises, this is like promise chaining  
    let x = await handlePromise;
    let x2 = await handlePromise2;
    console.log(x, x2);

    // handlePromise.then((item) => {
    //     console.log(item);
    // })
}

getData();

//1 async k sath kitne bhi await lga skte h
//await k sath async nhi lgaenge to error milega
// async k sath await nhi lgaenge to promise milega
//empty async func me jo bhi return krenge vo milega as output
