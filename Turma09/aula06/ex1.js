// Atividade 1

const polParaCm = (pol) => {
    return pol * 2.54;
}

polParaCm(5);

// Atividade 2

const textoParaUrl = (texto) => {
    return `http://www.${texto}.com.br`;
}

textoParaUrl('google');

// Atividade 3

const fraseExclamacao = (frase) => {
    return `${frase}!`;
}

fraseExclamacao('Essa atividade foi mais legal do que pintar com Lukscolor, uauuuuuuu');

// Atividade 4

const idadeDeCachorro = (idadeHumano) => {
    return idadeHumano * 7;
}

idadeDeCachorro(29);

// Atividade 5

const horaTrabalho = (salario) => {
    const total = salario / 160;

    return `R$ ${total.toFixed(2).replace('.', ',')}`;
}

horaTrabalho(6500);

// Atividade 6

const calculaImc = (altura, peso) => {
    //return peso / (altura * altura);

    const total = peso / Math.pow(altura / 100, 2);

    return parseFloat(total.toFixed(2));
}

calculaImc(173, 67.8);

// Atividade 7

const minusculoParaMaiusculo = (texto) => {
    return texto.toUpperCase();
}

minusculoParaMaiusculo('essa é uma frase em minusculo');

// Atividade 8

const tipoDeParametro = (tipo) => {
    return typeof(tipo);
}

tipoDeParametro('10'); //string
tipoDeParametro(10); // number
tipoDeParametro(true) //boolean
tipoDeParametro(['teste']) //object
tipoDeParametro({nome: 'teste'}) // object

// Atividade 9

const retornaCircunferencia = (raio) => {
    return 2 * Math.PI * raio;
}

retornaCircunferencia(5);

const multi = (valorA, valorB) => {
    return valorA * valorB;
}

const quadrado = (parametro) => {
    return multi(parametro, parametro) * multi(parametro, parametro);
}

console.log(quadrado(2));

