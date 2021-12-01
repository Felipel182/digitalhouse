// Revisão

// 1

function soma(valor1 = 1, valor2 = 2) {
    return valor1 + valor2;
}

//const total = soma(5);
//console.log(total);

// 2
// + concatenação
// == | === igualdade
/* ! negação */
// && operador lógica e (and)

// 3

let filmes = [
    50,
    35,
    25,
    10,
    60
];

filmes.sort();
//console.log(filmes);

filmes.sort(function(a, b) {
    return b - a;
});

//console.log(filmes);

// 4

for (let i = 10; i > 1; i -= 2) {
    //console.log(i);
}

// 5

const fs = require('fs');

fs.writeFileSync('./arquivo.txt', 'Aula14\n');

const arquivo = fs.readFileSync('./arquivo.txt', 'utf-8');
console.log(arquivo);

fs.appendFileSync('./arquivo.txt', '23/11');

// 7 CLOSURES
// função dentro de função
// função de pai para filho

//filmes.sort().reverse(); // função aninhada
//console.log(filmes);

filmes = [
    'Matrix 4',
    'Venon',
    'O Conde de Monte Cristo',
    'Titanic',
    'Star Wars',
    'John Wick',
    'O Tigre e o Dragão',
    'Alerta Vermelho',
    'Esquadrão 6',
    'JoeGi'
];

const filmesMaiusculo = filmes.map(function(item) {
    return item.toUpperCase();
});

// console.log(filmesMaiusculo);

let valor = 11;

if (valor == 10) {
    console.log('O valor é igual a 10');
}

console.log('Abaixo da condição');


