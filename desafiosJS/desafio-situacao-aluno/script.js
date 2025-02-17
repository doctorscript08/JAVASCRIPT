function calcularSituacao() {
    let nomeAluno = prompt('Qual é o nome do aluno?')
    let nota1 = Number(prompt(`Primeira nota de ${nomeAluno}:`))
    let nota2 = Number(prompt(`Segunda nota de ${nomeAluno}:`))

    let res = document.getElementById('res')
    let media = ((nota1 + nota2) / 2).toFixed(2)

    res.innerHTML = `<h2>Analisando a situação de ${nomeAluno}</h2>`
    res.innerHTML += `<p>Com as notas ${nota1.toFixed(1)} e ${nota2.toFixed(1)}, a <strong>média é ${media}</strong></p>`

    if (media < 3) {
        res.innerHTML += `Com média abaixo de 3.0, o aluno está <span style="background-color: #E28783">REPROVADO</span>`
    } else if (media < 6) {
        res.innerHTML += `Com a média entre 3.0 e 6.0, o aluno está em <span style="color: #C3884C">RECUPERAÇÃO</span>`
    } else {
        res.innerHTML += `Com a média acima de 6.0, o aluno está <span style="background-color: #A6EB9A">APROVADO</span>`
    }
}