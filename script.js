function carregar(){
    var msg = window.document.getElementById('msg');
    var img = document.getElementById("imagem")
    var data = new Date();
    var hora = data.getHours()
    img.style.display = 'flex';
    //hora = 20
    msg.innerHTML = `agora Sao ${hora}`;
    if(hora >= 0 && hora < 12){
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#d2691e'
    }else{
        img.src = 'img/noite.jpg'
        document.body.style.background = "#696969"
    }
}