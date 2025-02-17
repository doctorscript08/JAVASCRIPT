function converter() {
    let medida = Number(prompt('Digite uma distância em metros(m)'))
    const res = document.getElementById('res')

    res.innerHTML = `<p>A distância de ${medida}m, corresponde a...</p>`
    res.innerHTML += `<p>${(medida/1000).toLocaleString()}Km</p>`
    res.innerHTML += `<p>${(medida/100).toLocaleString()}Hm</p>`
    res.innerHTML += `<p>${(medida/10).toLocaleString()}Dam</p>`
    res.innerHTML += `<p>${(medida*10).toLocaleString()}dm</p>`
    res.innerHTML += `<p>${(medida*100).toLocaleString()}cm</p>`
    res.innerHTML += `<p>${(medida*1000).toLocaleString()}mm</p>`
}