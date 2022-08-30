function carregar() {  
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    var data1 = new Date()
    var minutos = data1.getMinutes()
    var data2 = new Date()
    var ano = data2.getFullYear()
    var data3 = new Date()
    var data4 = new Date()
    var dia = data3.innerHTML = 'Segunda feira'
    var mes = data4.innerHTML = 'Abril'

    msg.innerHTML = `Agora são <strong>${hora}</strong> horas e <strong>${minutos}</strong> minutos de <strong>${dia}</strong>, do mês de <strong>${mes}</strong>, do ano de <strong>${ano}</strong>.`
    
    if (hora >= 6 && hora <= 12) {
        //BOM DIA!
        img.src = 'manha.png'
        msg.innerHTML += `<p><strong>BOM DIA!</strong></p>`
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora < 18) {
        // BOA TARDE!
        msg.innerHTML += `<p><strong>BOA TARDE!</strong></p>`
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else if (hora >= 18 && hora <= 23) {
        //BOA NOITE!
        msg.innerHTML += `<p><strong>BOA NOITE!</strong></p>`
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    } else if (hora >= 0 && hora <= 5) {
        msg.innerHTML += `<p><strong>BOA MADRUGADA!</p></strong>`
        img.src = 'madrugada.png'
        document.body.style.background = '#00000f'
    }
}


