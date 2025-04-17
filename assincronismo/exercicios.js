//https://jsonplaceholder.typicode.com/users/${id}

const getUser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const dados = await response.json()
    console.log(dados)
}

getUser(1)

const getUser2 = async (id) => {
    const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const dados2 = await response2.json()
    return dados2
}

(async () => {
    const array_promises = await Promise.all([
        getUser2(1),
        getUser2(2),
        getUser2(3)
    ])
    console.log(array_promises)
}) ()

const getUser3 = async (id) => {
    try {
        const response3 = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const dados3 = await response3.json()
        console.log(dados3)
    } catch (error) {
        console.log(error)
    }
}

getUser3(5)

const getUser4 = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response4 => response4.json())
        .then(dados4 => console.log(dados4['name']))
}

getUser4(6)

const getUser5 = async ([id1, id2, id3]) => {
    try {
        const array_promises2 = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${id1}`),
            fetch(`https://jsonplaceholder.typicode.com/users/${id2}`),
            fetch(`https://jsonplaceholder.typicode.com/users/${id3}`)
        ])

        const dados5 = await Promise.all(array_promises2.map(response5 => response5.json()))

        dados5.forEach(dado => console.log(dado['name']))
    } catch (error) {
        console.log(error)
    }
}

getUser5([1, 2, 3])