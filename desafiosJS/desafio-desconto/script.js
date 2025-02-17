function calcularDesconto() {
    let nomeProduto = prompt('Qual é o produto que você está comprando?')
    let precoProduto = prompt(`Qual é o preço de ${nomeProduto}?`)
    let res = document.getElementById('res')

    res.innerHTML = `<h2>Calculando desconto de 10% para ${nomeProduto}</h2>`
    res.innerHTML += `<p>O preço original era ${Number(precoProduto).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}.</p>`

    res.innerHTML += `<p>Você acaba de ganhar ${Number(precoProduto * (10 / 100)).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })} (-10%).</p>`

    res.innerHTML += `<p>No fim, você vai pagar ${Number(precoProduto - (precoProduto * (10 / 100))).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })} no produto ${nomeProduto}.</p>`
}