const numeros = [1, 8, 35, 15, 9, 10];

console.log(numeros);
const dobro = numeros.map(numero => numero * 2);

console.log(dobro);
const soma = numeros.reduce((total, numero) => { 
    //console.log(`Total ${total}`);
   // console.log(`numero ${numero}`);

    if (numero % 3 === 0) {
        total += numero;
    }

    return total;

});

console.log(soma);

const filtro = numeros.filter(numero => numero % 3 === 0).reduce((total, numero) => total + numero);

console.log(filtro);

const find = numeros.find(numero => numero > 10);
console.log(find);

const ordenado = numeros.sort();

console.log(ordenado);

const laco = ordenado.forEach(numero => {

    console.log(numero);

});

let filmes = ['Alerta Vermelho', 'Esquadrão 6', 'Pulp Fiction', 'Embalos de Sábado a Noite'];

const filmesModificado = filmes.map(filme => filme.toUpperCase());

console.log(filmesModificado);

let objetos = [
    { title: 'Alerta Vermelho', alugar: 10, avaliacao: 10  },
    { title: 'Esquadrão 6', alugar: 10, avaliacao: 9 },
    { title: 'Pulp Fiction', alugar: 10, avaliacao: 5 },
    { title: 'Embalos de Sábado a Noite', alugar: 10, avaliacao: 3 },
];

console.log(objetos);

const filmesAvaliados = objetos.filter(filme => filme.avaliacao > 5);
const filmesTitle = objetos.find(filme => filme.title === 'Alerta Vermelho2');

console.log(filmesAvaliados);
console.log(filmesTitle);











