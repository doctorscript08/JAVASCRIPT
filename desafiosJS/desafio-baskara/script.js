function calcularBhaskara() {
    const res = document.querySelector('#res')
    res.innerHTML = "<p>Considerando uma equação no formato <strong>ax<sup>2</sup> + bx + c = 0</strong>, aperte o botão acima para calcular o valor de △.</p>"

    let a = Number(prompt("Qual é o valor de a?"))
    let b = Number(prompt("Qual é o valor de b?"))
    let c = Number(prompt("Qual é o valor de c?"))

    let delta = (b**2 - 4 * a * c)

    let x, x2

    if (delta < 0)
        alert('RESULTADO IMPOSSÍVEL!')
    else if (delta == 0) {
        x = (-(b) / 2 * a)
        res.innerHTML = `<p>A equação actual ${a}x<sup>2</sup> + ${b}x + ${c} = 0</p> <p>△ = ${delta}</p> <p>x = ${x}</p>`
    } else {
        x = (-(b) + Math.sqrt(delta))
        x2 = (-(b) - Math.sqrt(delta))
        res.innerHTML = `<p>A equação actual <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p> <p><strong>△ =</strong> ${delta}</p> <p><strong>x<sub>1</sub> = </strong> ${x.toFixed(2)} e <strong>x<sub>2</sub> =</strong> ${x2.toFixed(2)}</p>`
    }
}