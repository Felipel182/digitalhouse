const casa = require('./ex1');

casa.adicionarPessoa('Rodrigo', 37);
casa.adicionarPessoa('Silvia', 20);
casa.adicionarPessoa('Maria', 35);

module.exports = casa.listaPessoas;