let amigos = [];
let resultado = '';
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre == ''){
        alert('Debes ingresar un nombre');
    }else{
    amigos.push(nombre);
    actualizarLista([amigos])
    limpiarCaja() 
}

function actualizarLista([amigos]){
    resultado = '';
    amigos.forEach(element => {
        resultado +=`<li>${element}</li>`
    document.getElementById('listaAmigos').innerHTML = resultado; 
    }); 
}
}

function limpiarCaja(){
    document.getElementById('amigo').value = ""
}

function sortearAmigo(){
    let cantidadAmigos = amigos.length
    let amigoSecreto =  Math.floor(Math.random() * cantidadAmigos)
    let resultadoAmigo = '';
    console.log(amigoSecreto)
    if( amigoSecreto <= amigos.length){
        resultadoAmigo = `el amigo secreto es ${amigos[amigoSecreto]}`
        document.getElementById('resultado').innerHTML = resultadoAmigo;
    }
}

