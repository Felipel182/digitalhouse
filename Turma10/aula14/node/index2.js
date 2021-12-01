const moment = require('moment');

const data = new Date();

moment.locale('pt-br');

console.log(moment(data).format('dd'));

function soma(valor1 = 1, valor2 = 3) {
    return valor1 + valor2;
}

let total = soma(5, 5);
console.log(total * 2)

let numeros = [50, 20, 10, 15, 35, 60];

numeros.sort().reverse();

console.log(numeros.sort(function(a, b) {
    b - a
}));

for (let i = 30; i >= 5; i -= 10) {
    console.log(i);
}

class Objeto {
    constructor(nome) {
        this.nome = nome;
    }
}

const teste = new Objeto('Rodrigo');
const teste2 = new Objeto('Carla');

const filmes = [
    'Matrix 4',
    'Venon',
    'Alerta Vermelho',
    'Esquedrão 6',
    'Se beber não case',
    'Uma noite de crime',
    'Um amor para recordar'
];


filmesMaiusculo = filmes.map(function(filme) {
    return filme.toUpperCase();
});

console.log(filmesMaiusculo);

const fs = require('fs');

const dados = fs.readFileSync('./dados.json', 'utf-8', function(erro) {
   return erro;
});

const dadosLiteral = JSON.parse(dados);

console.log(dadosLiteral.nome);

const novosDados = {
    nome: 'Ana',
    profissao: 'Programadora',
    idade: 25
}

const json = JSON.stringify(novosDados);

fs.writeFileSync('./arquivo.txt', 'aula14\n', function(erro) {
    if (!erro) {
        console.log('Dados gravados com sucesso');
    }
});

fs.appendFileSync('./arquivo.txt', '23/11\n');

// closures

Teste = {
    nome: 'Rodrigo',
    exibirNome: function() {

    }
}

if (teste === 0) {

}