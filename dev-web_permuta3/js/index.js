function insert(number) { 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + number;
    


}

function deletar() {
    document.getElementById('resultado').innerHTML = '';
}

function voltar() {
    var result = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result.substring(0,result.length - 1);
}


function calcular() {
    var regex = /^[0-9]+([-+*/%][0-9]+)*$/;
    var result = document.getElementById('resultado').innerHTML;

    if (result.includes('/0')) {
        document.getElementById('resultado').innerHTML = 'ERRO!';
    } else if (result.includes('%')) {
        result = calcularPorcentagem(result);
        document.getElementById('resultado').innerHTML = result;
    } else if (regex.test(result)) {
        document.getElementById('resultado').innerHTML = eval(result);
    } else {
        document.getElementById('resultado').innerHTML = 'Inválida.';
    }
}

function calcularPorcentagem(resultado) {
    var valor = resultado.replace('%','/100');
    var resultadoPorcentagem = eval(valor);
    return resultadoPorcentagem;
}



/**
 * 
 * function calcularPorcentagem(resultadoPorcentagem) {
    var valorBase = resultado.replace('%', '');
    var porcentagem = parseFloat(valorBase) / 100;
    resultadoPorcentagem = parseFloat(valorBase) * porcentagem;
    return resultadoPorcentagem;
}
 */


function somar(sinals) {
    var resultado = document.getElementById('resultado');
    var sinal = resultado.innerHTML;
    const ultimoChar = sinal.slice(-1);

    if (sinals === '+' && ultimoChar === '+') {
        Event.preventDefault(); 
}

    resultado.innerHTML = sinal + sinals;
}

function subtrair(sinals) {
    var resultado = document.getElementById('resultado');
    var sinal = resultado.innerHTML;
    const ultimoChar = sinal.slice(-1);

    if (sinals === '-' && ultimoChar === '-') {
        Event.preventDefault(); 
}

    resultado.innerHTML = sinal + sinals;
}

function multiplicar(sinals) {
    var resultado = document.getElementById('resultado');
    var sinal = resultado.innerHTML;
    const ultimoChar = sinal.slice(-1);

    if (sinals === '*' && ultimoChar === '*') {
        Event.preventDefault(); 
}

    resultado.innerHTML = sinal + sinals;
}

function dividir(sinals) {
    var resultado = document.getElementById('resultado');
    var sinal = resultado.innerHTML;
    const ultimoChar = sinal.slice(-1);

    if (sinals === '/' && ultimoChar === '/') {
        Event.preventDefault(); 
}

    resultado.innerHTML = sinal + sinals;
}

function ponto(sinals) {
    var resultado = document.getElementById('resultado');
    var sinal = resultado.innerHTML;
    const ultimoChar = sinal.slice(-1);

    if (sinals === '.' && ultimoChar === '.') {
        Event.preventDefault(); 
}

    resultado.innerHTML = sinal + sinals;
}

function porcentagem(sinals) {
    var resultado = document.getElementById('resultado');
    var sinal = resultado.innerHTML;
    const ultimoChar = sinal.slice(-1);

    if (sinals === '%' && ultimoChar === '%') {
        Event.preventDefault(); 
}

    resultado.innerHTML = sinal + sinals;
}
    
    
    
