var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent=("pinpin nutricao");

var paciente = document.querySelector("#primeiro-paciente");
var tdNome = document.querySelector(".info-nome")
var nome = tdNome.textContent;
console.log(nome);

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);
tdImc.textContent = imc;
console.log(imc);

if (peso <0||peso> 1000) {
    console.log("Peso inválido")
    pesoEhValido = false;
}

if (altura <0||altura> 3.00){
    console.log("Altura inaválida!")
    alturaEhValido = false;
}

var pesoEhValido = true;
var alturaEhValido = true;

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc
}