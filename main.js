let misImagenes = ['img/boski.jpg', 'img/carlanga.jpg','img/donny.jpg','img/gato.jpg',
'img/lococharcas.jpg','img/monsi.jpg']; 

function randomImg(){
    let image = document.createElement('img');
    let div = document.getElementById('ruleta');
    image.src = 'misImagenes';
    div.appendChild(image);
    Math.floor(Math.random() * misImagenes);

}