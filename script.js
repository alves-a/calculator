var calculo = ""

function addNumber(num) {
    calculo = calculo + num
    document.querySelector("p#tela-textoCima").innerHTML = calculo;
}

function igual() {
    var resultado = calculo
    if (resultado) {
        document.querySelector("p#tela-textoCima").innerHTML += "="
        document.querySelector("p#tela-textoBaixo").innerHTML = eval(resultado);
    }
}

function clean() {
    calculo = ""
    document.querySelector("p#tela-textoCima").innerHTML = "";
    document.querySelector("p#tela-textoBaixo").innerHTML = "";
}

function back() {
    calculo = calculo.substring(0, calculo.length-1)
    document.querySelector("p#tela-textoCima").innerHTML = calculo;
}

function raiz() {
    var raiz = eval(calculo)
    document.querySelector("p#tela-textoCima").innerHTML = "&radic;" + calculo
    document.querySelector("p#tela-textoBaixo").innerHTML = Math.sqrt(raiz);
}