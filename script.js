var conta = ""
function addNumber(num) {
    conta = conta + num
    document.querySelector("p#tela-textoCima").innerHTML = conta;
}

function igual() {
    var expressao = conta
    if (expressao) {
        document.querySelector("p#tela-textoBaixo").innerHTML = eval(expressao);
    }
}

function clean() {
    conta = ""
    document.querySelector("p#tela-textoCima").innerHTML = "";
    document.querySelector("p#tela-textoBaixo").innerHTML = "";
}

function back() {
}

/*
var adicao = (a, b) => a + b
var subtracao = (a,b) => a - b
var multiplicacao = (a, b) => a * b
var divisao = (a,b) => a / b
var raiz = (a) => Math.sqrt(a)

var numArray = [];
function addNumber(num){
    numArray.push(num);
    var singleNumber = Number(numArray.join(''));
    document.querySelector("p#tela-textoBaixo").innerHTML = singleNumber;
}

const a = singleNumberA
const b = singleNumberB
*/