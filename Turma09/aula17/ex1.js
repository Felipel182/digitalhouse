let numeros = [ 5, 20, 30, 10, 8, 9 ];
let filmes = [ 'Matrix 4', 'Alerta Vermelho', 'O poderoso chefão', 'o tigre e o dragao', 'Fogo contra fogo' ];

console.log(numeros);

const dobro = numeros.map(function(numero) {
    return numero * 2;
});

console.log(dobro);

console.log(filmes);

const filmesMaiusculo = filmes.map(filme => filme.toUpperCase());

console.log(filmesMaiusculo);

console.log(numeros);

let numeros10 = numeros.filter(numero => numero > 10);

console.log(numeros10);

const procurar = filmes.find(filme => filme === 'o tigre e o dragao teste');

console.log(!!procurar);

const soma = numeros.reduce((total, numero) => total + numero);

console.log(soma);


const filmeObjeto = [
    {
        titulo: 'Matrix 4',
        valor: 39,
        avaliacao: 9
    },
    {
        titulo: 'Alerta Vermelho',
        valor: 10,
        avaliacao: 7      
    },
    {
        titulo: 'O poderoso chefão',
        valor: 10,
        avaliacao: 10     
    },
    {
        valor: 15,
        avaliacao: 0,
        titulo: 'o tigre e o dragao',    
    },        
];

const filmesFiltro = filmeObjeto.filter(function(filme) {
    return filme.numero === 39 && 
    filme.cor === 'preta' && 
    filme.cor === 'amarela';
});

console.log(filmesFiltro);
