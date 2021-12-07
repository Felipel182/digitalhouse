const participantes = require('./participantes');

participantes.adicionarPessoa('José', 50, [5,5,5]);

participantes.exibirTodos();

class Festa {
    listaParticipantes = [];

    constructor(listaPessoas) {
        this.listaParticipantes = listaPessoas;
    }
}

const galera = new Festa(participantes.listaParticipantes);