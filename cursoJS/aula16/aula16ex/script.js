let numeros = []
const res = document.getElementById('res')

function existeNaLista(num) {
    if (numeros.indexOf(num) == -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    const numero = document.getElementById('numero')
    const armazem = document.getElementById('armazem')

    if (numero.value.length == 0 || existeNaLista(Number(numero.value)) || numero.value < 1 || numero.value > 100) {
        alert('Valor inválido ou já inserido na lista')
    } else {
        numeros.push(Number(numero.value))

        let option = document.createElement('option')
        option.text = `Valor ${numero.value} adicionado.`
        armazem.appendChild(option)
        res.innerHTML = ''
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (numeros.length == 0) {
        alert('Nenhum valor foi adicionado!')
    } else {
        res.innerHTML = ''

        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        for (let c in numeros) {
            soma += numeros[c]
            maior = numeros[c] > maior ? numeros[c] : maior
            menor = numeros[c] < menor ? numeros[c] : menor
        }

        media = (soma / numeros.length).toFixed(2)

        res.innerHTML = `<p>Foram adicionados ${numeros.length} valor/es.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}