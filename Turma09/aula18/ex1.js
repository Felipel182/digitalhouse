const casa = {
    listaPessoas: [],
    listaFinal: [],
    nome: '',
    quantidadeFaltas: 0,
    adicionarPessoas: function(nome, idade) {
        this.listaPessoas.push({
            nome: nome,
            idade: parseInt(idade)
        });
    },
    faltas: function() {
        this.quantidadeFaltas++;

        //console.log(this.quantidadeFaltas);
    }
}

module.exports = casa;