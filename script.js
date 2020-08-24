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