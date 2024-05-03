function carregar() {
    var img = window.document.getElementById('img')
    var msg = window.document.getAnimations('msg')
    var data = new Date()
    var hora = data.getHour()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos.`
}