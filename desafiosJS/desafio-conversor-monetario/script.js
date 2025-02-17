let cotacao = prompt("Antes de mais nada. Quanto está a cotação do dólar agora?")

function converter() {
    let carteira = Number(prompt("Quantos R$ tem na carteira?"))

    const res = document.querySelector('#res')

    res.innerHTML = `Com ${Number(carteira.toFixed(2)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} você pode comprar ${Number((carteira / cotacao).toFixed(2)).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}`
}