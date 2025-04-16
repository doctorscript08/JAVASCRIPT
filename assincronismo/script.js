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