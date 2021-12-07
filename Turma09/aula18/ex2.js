const casa = require('./participantes');

const festa = {
    participantes: casa.listaPessoas,
    adicionarParticipantes: function(nome, idade) {
        this.participantes.push({
            nome: nome,
            idade: idade
        });
    }
}

console.log(festa.participantes);
console.log('-----------');
festa.adicionarParticipantes('Maisa', 20);
festa.adicionarParticipantes('Gabriela', 30);
console.log('adicionei novos participantes');
console.log(festa.participantes);