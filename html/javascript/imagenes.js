var imagenes = [
    'img/descarga (2).jpg',
    'img/descarga (1).jpg',
    'img/images (1).jpg',
    'img/images (2).jpg',
    'img/piscinas-prefabricadas.jpg'
   
];


var num = 0;

function adelante() {
    var slider = document.getElementById('imagenis');
    num++;
    if(num >= imagenes.length) {
        num = 0;
    }
    slider.src= imagenes[num];
}
function atras() {
    var slider = document.getElementById('imagenis');
    num--;
    if(num < 0) {
        num = imagenes.length-1;
    }
    slider.src = imagenes[num];
}


/**Menu Responsive*/

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu ');
const barras = document.querySelectorAll('.ham span');
ham.addEventListener('click',()=>{
    enlaces.classList.toggle('activado');
    barras.forEach(child=>{child.classList.toggle('animado')});
})