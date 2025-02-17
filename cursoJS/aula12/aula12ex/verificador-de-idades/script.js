function verificar() {
    const anoNascimento = document.querySelector('#txtAno')
    let anoActual = new Date().getFullYear()
    const res = document.querySelector('#res')

    if (anoNascimento.value.length == 0 || anoNascimento.value <= 0 || anoNascimento.value > anoActual) {
        alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        let idade = (anoActual - Number(anoNascimento.value))
        const sexo = document.getElementsByName('sexo')
        let genero = sexo[0].checked ? 'Homem' : 'Mulher'
        const img = document.createElement('img')

        if (sexo[0].checked) {
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './_imagens/crianca-homem.png')
                //Criança
            } else if (idade < 21) {
                img.setAttribute('src', './_imagens/jovem-homem.png')
                //Jovem
            } else if (idade < 50) {
                img.setAttribute('src', './_imagens/adulto-homem.png')
                //Adulto
            } else {
                img.setAttribute('src', './_imagens/idoso-homem.png')
                //Idoso
            }
        } else {
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './_imagens/crianca-mulher.png')
                //Criança
            } else if (idade < 21) {
                img.setAttribute('src', './_imagens/jovem-mulher.png')
                //Jovem
            } else if (idade < 50) {
                img.setAttribute('src', './_imagens/adulto-mulher.png')
                //Adulto
            } else {
                img.setAttribute('src', './_imagens/idoso-mulher.png')
                //Idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}