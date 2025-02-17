function contar() {
    const txtInicio = document.getElementById('inicio')
    let inicio = Number(txtInicio.value)
    const txtFim = document.getElementById('fim')
    let fim = Number(txtFim.value)
    let passo = Number(document.getElementById('passo').value)
    const res = document.getElementById('res')
    
    if (txtInicio.value.length == 0 || txtFim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        if (passo <= 0) {
            alert('Passo inválido! Considerando passo 1')
            passo++
        }

        res.innerHTML = 'Contando:<br>'

        if (inicio > fim) {
            for (let num = inicio; num >= fim; num -= passo) {
                res.innerHTML += `${num}  `
            }
        } else {
            for (let num = inicio; num <= fim; num += passo) {
                res.innerHTML += `${num}  `
            }
        } 
        res.innerHTML += `\u{1F3C1}`
    }
}