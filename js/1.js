function cpu(){
    const cpu = Math.floor(Math.random() * 5) + 1;
    return cpu;
}
//Defino los botones necesarios
let botonComenzar = document.getElementById(`comenzar`);
let botonEnviar = document.getElementById(`enviar`);
let entradaTexto = document.getElementById(`entrada`);
let letreros = document.getElementById(`cartel`);
// Manejador de Eventos
botonComenzar.addEventListener("click",ocultarMostrar);
botonEnviar.addEventListener("click",enviar);

//Defino las funciones para cada boton 
function ocultarMostrar(){
botonComenzar.style.display  =`none`;
botonEnviar.style.display=`block`;
entradaTexto.style.display=`block`;
}
function enviar(){
let valor = entradaTexto.value;
let a=cpu();
let b= parseInt(valor);
console.log(a);
console.log(b);
if(a==b){
letreros.innerText='Ganaste!';
alert(`Ganaste`);
}else{
    letreros.innerText='Perdiste!';
    alert(`Perdiste`);
}
}