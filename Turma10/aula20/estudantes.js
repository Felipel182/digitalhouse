const aluno = require('./aluno');

const rodrigo = new aluno.construtor('Rodrigo', 0, [7, 10, 9]);
aluno.aumentarFaltas(rodrigo);
aluno.aumentarFaltas(rodrigo);

const maria   = new aluno.construtor('Maria', 0, [5, 5, 5]);
aluno.aumentarFaltas(maria);

const ana     = new aluno.construtor('Ana', 0, [7, 7, 7]);
const marcio  = new aluno.construtor('Márcio', 0, [0, 5, 7]);
aluno.aumentarFaltas(marcio);

module.exports = {
    rodrigo,
    maria,
    ana,
    marcio,    
}