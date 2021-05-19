


let MuestraUbicacion = document.getElementById('ubicacion');
let MuestraPropiedades= document.getElementById('propiedad');
let MuestraDormitorios=document.getElementById('dormitorios');
let MuestraBaños=document.getElementById('baños');
let clickUbi = 1;
let clickPro=1;
let clickDor=1;
let clickBan=1;

MuestraUbicacion.addEventListener('click',muestraUbi);
MuestraPropiedades.addEventListener('click',muestraPro);
MuestraDormitorios.addEventListener('click',muestraDor);
MuestraBaños.addEventListener('click',muestraBan);

function muestraUbi(){
if(clickUbi==1){
    document.getElementById('muestra-contenido-ubicacion').classList.add('filtros-ubicacion');
    clickUbi = clickUbi+1;
}else{
 document.getElementById('muestra-contenido-ubicacion').classList.replace('filtros-ubicacion','contenido-ubicacion');
 clickUbi=1;
}
}

function muestraPro(){
if(clickPro==1){
    document.getElementById('muestra-contenido-propiedad').classList.add('filtros-propiedad');
    clickPro = clickPro+1;
}else{
    document.getElementById('muestra-contenido-propiedad').classList.replace('filtros-propiedad','contenido-propiedad');
    clickPro=1;
}
}

function muestraDor(){
    if(clickDor==1){
        document.getElementById('muestra-contenido-dormitorios').classList.add('filtros-dormitorios');
        clickDor = clickDor+1;
    }else{
        document.getElementById('muestra-contenido-dormitorios').classList.replace('filtros-dormitorios','contenido-dormitorios');
        clickDor=1;
    }
}

function muestraBan(){
    if(clickBan==1){
        document.getElementById('muestra-contenido-baños').classList.add('filtros-baños');
        clickBan = clickBan+1;
    }else{
        document.getElementById('muestra-contenido-baños').classList.replace('filtros-baños','contenido-baños');
        clickBan=1;
    }
}


/**Menu Responsive*/

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu ');
const barras = document.querySelectorAll('.ham span');
ham.addEventListener('click',()=>{
    enlaces.classList.toggle('activado');
    barras.forEach(child=>{child.classList.toggle('animado')});
})

/*Caja De filtros-Responsive*/

const filtrosResposive = document.querySelector('.filtro-resposive');
const filtros = document.querySelector('.contenedor-filtros');
const logo = document.querySelector('.logo');
const hamButom = document.querySelector('.buttom-ham');

filtrosResposive.addEventListener('click',()=>{
filtros.classList.toggle('mostrar');
filtrosResposive.classList.toggle('ocultar');
logo.classList.toggle('ocultar');
hamButom.classList.toggle('no');
});

let x = document.querySelector('.x');

x.addEventListener('click',()=>{
filtros.classList.remove('mostrar');
logo.classList.remove('ocultar');
hamButom.classList.remove('no');
filtrosResposive.classList.remove('ocultar');
});
    