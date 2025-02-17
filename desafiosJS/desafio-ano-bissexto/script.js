function anoEBissexto() {
    const res = document.getElementById('res')

    let ano = Number(prompt('Que ano pretende verificar se é ou não bissexto?'))

    if (typeof ano === 'number') {
        res.innerHTML = `<h2>Analisando o ano de ${ano}.</h2>`

        res.innerHTML += ano % 4 == 0 ? `O ano ${ano} <mark style="background-color: #A6EB9A;">É BISSEXTO</mark> \u{2705}` : `O ano ${ano} <mark style="background-color: #E28783;">NÃO É BISSEXTO</mark> \u{274C}`
    }
}