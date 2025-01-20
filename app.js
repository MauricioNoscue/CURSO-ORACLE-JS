let numeroSecreto = generarAleatorio();
let intentos = 1;
let listanumerosSorteados = [];
let numeroMaximo = 10;

function asignarTexto(element,texto ){
    let elemento = document.querySelector(element);
elemento.innerHTML=texto;
}
function generarAleatorio(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1 ;
    if(listanumerosSorteados.length == numeroMaximo){
        asignarTexto('p',' ya se sortearon todos los numeros posibles  ')

    }else{
        if(listanumerosSorteados.includes(numeroGenerado)){
            return generarAleatorio()
        }else{
            listanumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
    
    
}
 


function intentoDeUsuario(){
    let numeroUsuario = parseInt(document.getElementById("valor").value);
    
    if(numeroUsuario == numeroSecreto){
        asignarTexto('p',`acertaseste numero en ${intentos}  ${intentos === 1? 'vez' :'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(numeroUsuario> numeroSecreto){
        asignarTexto('p',' el numero es menor ')

        }else{
        asignarTexto('p','el numero es mayor')

        }
    }
    intentos ++
    limpiarCaja()
    console.log(intentos)
}

function limpiarCaja(){
    document.querySelector('#valor').value = ""
}


function menasjesiniciales(){
    asignarTexto('h1','este es el juego de adivinar') 
    asignarTexto('p',`ingrese un numero entre 1 y ${numeroMaximo} para jugar`) 
    numeroSecreto = generarAleatorio();
    intentos = 1;
    console.log(numeroSecreto)
    document.getElementById('reiniciar').setAttribute('disabled',true)

    
}

function reinicarJuego(){
    limpiarCaja()
    menasjesiniciales()
   
}
menasjesiniciales()