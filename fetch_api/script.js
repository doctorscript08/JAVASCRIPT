// https://jsonplaceholder.typicode.com/

const addUser = async () => {
    const inserirUser = await fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PATCH',
        body: JSON.stringify({name: "Késia"}),
        headers: {'Content-Type' : 'application/json'}
    })

    const response = await inserirUser.json()
    console.log(response['name'])
}

addUser()

const searchUser = async () => {
    const pesquisarUser = await fetch('https://jsonplaceholder.typicode.com/users/11')
    const response = await pesquisarUser.json()
    console.log(response['name'])
}

searchUser()