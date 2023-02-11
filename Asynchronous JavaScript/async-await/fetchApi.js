async function getData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1'); //1st await resolving api
    data = await data.json();//2nd api resolving json
    console.log(data);
}

getData();