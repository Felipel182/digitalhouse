const Casa = require('./casa');

const estudante = new Casa();

estudante.adicionarPessoa('Rodrigo', 37, [10, 5, 6]);
estudante.adicionarPessoa('Maria', 30, [1, 3, 6]);
estudante.adicionarPessoa('Ana', 25, [10, 10, 10]);

// reduce com objetos
/*
const total = estudante.listaPessoas.reduce((total, valor) => { 
    return total + valor.idade
}, 0);
*/

estudante.calcularMedia();

//console.log(estudante.listaPessoas[0]);

estudante.aumentarFaltas(0);
estudante.aumentarFaltas(0);

//console.log(estudante.listaPessoas[0]);
//console.log(estudante.listaPessoas);

//console.log(estudante.listaPessoas);

module.exports = estudante.listaPessoas;
