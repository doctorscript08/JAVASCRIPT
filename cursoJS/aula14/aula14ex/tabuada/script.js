function gerarTabuada() {
    const txtNum = document.getElementById('numero')
    const tabuada = document.getElementById('tabuada')
    let numero = Number(txtNum.value)

    if (txtNum.value.length == 0) {
        alert('Digite um número para gerar a tabuada!')
    } else {
        tabuada.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let option = document.createElement('option')
            option.text = `${numero} x ${c} = ${(numero * c)}`
            option.value = `tab${c}`
            tabuada.appendChild(option)
        }
    }
}