function verificar() {
    let precoAnterior = prompt('Qual era o valor anterior do produto?')
    let precoAnteriorFormatado = Number(precoAnterior).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })

    let precoActual = prompt('Qual é o preço actual do produto?')
    let precoActualFormatado = Number(precoActual).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })

    if (precoAnterior.length == 0 || precoActual.length == 0) {
        alert('Por favor informe ambos os preços!')
    } else {
        const res = document.getElementById('res')
        let diferencaDeprecos = (precoAnterior - precoActual) < 0 ? (precoAnterior - precoActual) * -1 : (precoAnterior - precoActual)
        let diferencaDeprecosFormatada = diferencaDeprecos.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })

        res.innerHTML = '<h2>Analisando os valores informados</h2>'

        if (Number(precoAnterior) < Number(precoActual)) {
            let percentagemDeSubida = (((precoActual - precoAnterior) / precoAnterior) * 100).toFixed(2)

            res.innerHTML += `<p>O produto custava ${precoAnteriorFormatado} e agora custa ${precoActualFormatado}.</p>\n<p>Hoje o produto está mais caro.</p>`

            res.innerHTML += `<p>O preço subiu ${diferencaDeprecosFormatada} em relação ao preço anterior.</p>\n<p>Uma variação de ${percentagemDeSubida}% pra cima.</p>`
        } else {
            let percentagemDeDescida = (((precoActual - precoAnterior) / precoActual) * 100).toFixed(2)

            res.innerHTML += `<p>O produto custava ${precoAnteriorFormatado} e agora custa ${precoActualFormatado}.</p>\n<p>Hoje o produto está mais barato.</p>`

            res.innerHTML += `<p>O preço caiu ${diferencaDeprecosFormatada} em relação ao preço anterior.</p>\n<p>Uma variação de ${percentagemDeDescida * -1}% pra baixo.</p>`
        }
    }
}