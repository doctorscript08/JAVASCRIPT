array = [0, 1, 6, 2, 8, 12, 87, 23, 45, 56, 72]

array.sort((a, b) => a - b)
console.log(array)

let tentativas = 0

const pesquisa_binaria = (array = [], item) => {
    let menor = 0;
    let maior = array.length - 1

    while (menor <= maior) {
        let meio = Math.floor((menor + maior) / 2)
        let chute = array[meio]

        if (chute == item) {
            tentativas++
            return meio
        } else if (chute > item) {
            maior = meio - 1
            tentativas++
        } else if (chute < item) {
            menor = meio + 1
            tentativas++
        } else {
            return -1
        }
    }
}

console.log(pesquisa_binaria(array, 87))

console.log('Tentativas: '+ tentativas)