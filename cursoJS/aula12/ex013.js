var hora = new Date().getHours()

console.log(`Agora são exactamente ${hora} horas`)

if (hora < 12) {
    console.log("Bom dia")
} else if (hora < 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}