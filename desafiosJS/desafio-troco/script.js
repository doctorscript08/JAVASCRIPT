function calcularTroco() {
    let produto = prompt('Que produto você está comprando?')
    let preco = prompt(`Quanto custa o ${produto} que você está comprando?`)
    let precoFormatado = Number(preco).toLocaleString('pt-AO', {style: 'currency', currency: 'AOA'})

    let valores = Number(prompt(`Qual valor você deu para pagar ${produto}?`))
    let valoresFormatados = Number(valores).toLocaleString('pt-AO', {style: 'currency', currency: 'AOA'})

    let troco = (valores - preco)
    let trocoFormatado = Number(troco).toLocaleString('pt-AO', {style: 'currency', currency: 'AOA'})

    if (troco < 0) {
        alert(`Você deu ${valoresFormatados}! Isso não é suficiente para pagar ${produto}.`)
    } else if (troco == 0) {
        alert(`Você comprou ${produto} que custou ${precoFormatado}.\nDeu ${valoresFormatados} em dinheiro, exactamente o valor do produto comprado. Não há troco.\nVolte Sempre.`)
    } else {
        alert(`Você comprou ${produto} que custou ${precoFormatado}.\nDeu ${valoresFormatados} em dinheiro e vai receber ${trocoFormatado} de troco.\nVolte sempre.`)
    }
}