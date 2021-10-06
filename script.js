var input = document.getElementById('Arth');
input.addEventListener('keyup', calculo);


//Funções
function calculo(e) {
    calculadora(e.target.value);
}

//Zera o valor final
var final = 0;

//Capta e reconhece os operadores
var operadores = ['*', '/', '+', '-','^', ];

//Operações
var operacoes = [

function (a, b) {
    return a ^ b;   
},

function (a, b) {
    return a * b;
},

function (a, b) {
    return a / b;
},

function (a, b) {
    return a + b;
},

function (a, b) {
    return a - b;
}];
var stop = 0;

//função de resolver parentes
function resolverParentes(eq) {
    return eq.replace(/\(.*\)/, function (mat) {
        return calculadora(mat.substring(1, mat.length - 1));
    });
}

//função para calculo
function calculo(pedido) {
    //aqui mostramos os simbolos dos operadores
    if (pedido.match(/[*\/+\-]$/)) return;
    //aqui entra a variavel onde vai priorizar oque estiver entre parentes
    var pedido = pedido.replace(/\s/g, '');
    pedido = resolverParentes(pedido);
    if (!/[*\/+\-]/.test(pedido)) return resultado(pedido);
    var regex = /[*\/]/.test(pedido) ? new RegExp("([^\/*+\-]*[*\/][^\/*+\-]*)") : new RegExp("([^\/*+\-]*[+\-][^\/*+\-]*)");
    pedido = processar(pedido, regex);
    if (/[*\/+\-]/.test(pedido)) return calculadora(pedido);
    return resultado(pedido);
}

//processamento do calculo
function processar(input, regex) {
    return input.replace(regex, function (str) {
        var op = str.match(/([*\/+\-])/)[0];
        var frag = str.split(op);
        var fn = operacoes[operadores.indexOf(op)];
        return fn(frag[0] * 1, frag[1] * 1);
    });
}
//função resultado
function resultado(final){
    var result = document.getElementById('result');
}