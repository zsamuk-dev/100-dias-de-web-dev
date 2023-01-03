fetch('https://reqres.in/api/users')    /*Por padrão o fetch faz um GET request */
    .then((res) => res.json())
    .then((data) => console.log(data.data))
    .catch((err)  => console.log(err))  


fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: {
        name: 'Samuel',
    },
})
    .then((res) => res.json())
    .then((data => console.log(data)))

