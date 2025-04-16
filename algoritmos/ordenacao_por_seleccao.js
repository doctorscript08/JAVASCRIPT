const menor = (array = []) => {
    let menor = array[0]
    let indice = 0;

    for (let c = 1; c < array.length; c++) {
        if (array[c] < menor) {
            menor = array[c]
            indice = c
        }
    }

    return indice
}

const remover_item = (array = [], indice) => {
    for (let c = indice; c < array.length; c++) {
        array[c] = array[c+1]
    }

    return array
}

const ordenacao_por_seleccao = (array = []) => {
    let novo_array = []

    for (let c = 0; c < array.length; c++) {
        let _menor = menor(array)
        novo_array.push(array[_menor])
        array = remover_item(array, _menor)
    }

    return novo_array
}

array = [1, 6, 2, 7, 8, 34, 76, 90, 4, 5]

console.log(ordenacao_por_seleccao(array))

const ordenacao_por_seleccao_v2 = (array = []) => {
    let intermediario = 0

    for (let c = 0; c < array.length - 1; c++) {
        if (array[c] > array[c+1]) {
            intermediario = array[c]
            array[c] = array[c+1]
            array[c+1] = intermediario
        }
    }

    return array
}

console.log(ordenacao_por_seleccao_v2(array))