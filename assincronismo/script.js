//https://jsonplaceholder.typicode.com/users/${id}
/*
    ======GEITO ANTIGO DE LIDAR COM PROMISES======
const getUserData = (id) => {
    const data = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json()) // prepara os dados
    .then(dados => console.log(dados)) //usa os dados
}

getUserData(1)*/

//  ======GEITO MODERNO DE LIDAR COM PROMISES======
const getUserData = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const dados = await response.json()
        console.log(dados)
    } catch (err) {
        console.log(err)
    }
}

getUserData(1)

const getUserData2 = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const dados = await response.json()
        return dados
    } catch (err) {
        console.log(err)
    }
}

getUserData2(1).then(userData => console.log(userData))

// ALTERNATIVA
const getUserData3 = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const dados = await res.json()
        return dados
    } catch (erro) {
        console.log(erro)
    }
}

/*(async () => {
    const userData1 = await getUserData3(1)
    const userData2 = await getUserData3(2)
    const userData3 = await getUserData3(3)
    console.log({userData1, userData2, userData3})
}) ()*/

// Posso fazer o mesmo usando um array de promises
(async () => {
    const usersData = await Promise.all([
        getUserData3(1),
        getUserData3(2),
        getUserData3(3)
    ])

    console.log(usersData)
}) ()