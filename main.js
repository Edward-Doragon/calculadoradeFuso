'use strict'

let lugarA = {
    graus: 0,
    sentido: '',
    horario: 0,
}

let lugarB = {
    graus: 0,
    sentido: '',
    horario: 0
}

let sentidoConta = '';
let grausResultante = 0;
let fusoResultante; // cada fuso equivale a 1 hora e representa 15 graus de longitude
let resultado = 0;

function setDados(){
    lugarA.graus = document.querySelector("#grausA").value;
    lugarB.graus = document.querySelector("#grausB").value;

    lugarA.sentido = document.querySelector('input[name="sentidoA"]:checked').value;
    lugarB.sentido = document.querySelector('input[name="sentidoB"]:checked').value;

    lugarA.horario = document.querySelector("#horarioA").value;

    sentidoConta = document.querySelector('input[name="sentidoConta"]:checked').value;
}


function calculaFuso (){
    setDados()

    if(lugarA.sentido === lugarB.sentido){
        grausResultante =  parseInt(lugarA.graus) - parseInt(lugarB.graus);
    }

    if(lugarA.sentido != lugarB.sentido){
       grausResultante =  parseInt(lugarA.graus) + parseInt(lugarB.graus);
    }

    fusoResultante = grausResultante / 15;
    

    if(sentidoConta === 'OESTE'){
        resultado = parseInt(lugarA.horario) + fusoResultante;
    }
    if(sentidoConta === 'LESTE'){
        resultado = parseInt(lugarA.horario) - fusoResultante;
    }

    if(resultado > 24){
        resultado = resultado - 24;
    }
    if(resultado < 0 ){
        resultado = resultado + 24;
    }

     console.log("O hórario resultante é : " + resultado +" horas");

     document.querySelector("#resultado").textContent = `O hórario resultante é: ${resultado} horas`
}


