const botonEncriptar = document.querySelector("#botonEncriptar");
const botonDesencriptar = document.querySelector("#botonDesencriptar");
const botonCopiar = document.querySelector("#botonCopiar");
var inputMensaje = document.querySelector("#input-text");
var mensajeFinal = document.querySelector("#mensaje-final");

const munieco = document.querySelector(".munieco");
const h2 = document.querySelector(".h2");
const parrafo = document.querySelector(".parrafo");

function ocultarCuadro2(){
    munieco.classList.add("ocultar");
    h2.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptar(){
    ocultarCuadro2();
    mensajeFinal.textContent = encriptarTexto(recuperarTexto());
}

function recuperarTexto(){
    return inputMensaje.value;
}

function encriptarTexto(stringParaEncriptar){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringParaEncriptar;
}

function desencriptar(){
    ocultarCuadro2();
    mensajeFinal.textContent = desencriptarTexto(recuperarTexto());
}

function desencriptarTexto(stringParaDesencriptar){
    let matrizCodigo =[["enter","e"],["ober","o"], ["imes","i"],["ai","a"],["ufat","u"]]
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringParaDesencriptar;
} 

function copiar(){
    navigator.clipboard.writeText(document.querySelector("#mensaje-final").innerText);
    inputMensaje.value = "";
    inputMensaje.focus();
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;