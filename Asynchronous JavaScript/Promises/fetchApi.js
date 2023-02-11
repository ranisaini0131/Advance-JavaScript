//=================how to resolve an api
//this part is fetching api's data this will generate a promise
const data2 = fetch("https://dummy.restapiexample.com/api/v1/employees");//

//this part will resolve the above generated promise give us response for resolving which we have to use other then 
//for resolving api's we have to reolving it 2 times
//when we resolve the result of .then in another .then is called promise chaining
data2.then((items) => {
    return items.json()
}).then((result) => {
    console.log("second output", result)
})
    .catch((err) => {
        console.log(err)
    })
