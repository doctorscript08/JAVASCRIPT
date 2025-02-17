function carregar() {
    var hora = new Date().getHours()
    var foto = document.getElementById('foto-do-dia')
    var msg = document.getElementById('hora-actual')

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 12) {
        foto.src = './_imagens/manha.jpg'
        document.body.style.background = 'blue'
    } else if (hora < 18) {
        foto.src = './_imagens/tarde.jpg'
        document.body.style.background = '#FD651B'
    } else {
        foto.src = './_imagens/noite.jpg'
        document.body.style.background = 'black'
    }
}