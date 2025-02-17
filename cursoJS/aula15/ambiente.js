let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`O vector tem ${num.length} posições`)
console.log(`O primeiro valor do vector é ${num[0]}`)
let valor = 5
let pos = num.indexOf(valor)

if (pos == -1) {
    console.log(`O valor ${valor} não foi encontrado!`)
} else {
    console.log(`O valor ${valor} está na posição ${pos}`)
}