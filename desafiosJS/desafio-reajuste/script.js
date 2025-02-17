function reajustarSalario() {
    let nomeFuncionario = prompt('Qual é o nome do funcionário?')
    let salarioFuncionario = Number(prompt(`Qual é o salário de ${nomeFuncionario}?`))

    let percentagemDeAumento = Number(prompt(`O salário de ${nomeFuncionario} será rejustado em qual percentagem?`))
    let novoSalario = Number((salarioFuncionario + (salarioFuncionario * (percentagemDeAumento / 100)))).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })

    let res = document.querySelector('#res')

    res.innerHTML = `<h2>${nomeFuncionario} recebeu um aumento salarial!</h2>
    <p>O salário era de ${Number(salarioFuncionario).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}.</p>`
    res.innerHTML += `<p>Com um aumento de ${percentagemDeAumento}%, o salário vai aumentar ${Number((salarioFuncionario * (percentagemDeAumento / 100))).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nomeFuncionario} vai passar a ganhar ${novoSalario}</p>`
}