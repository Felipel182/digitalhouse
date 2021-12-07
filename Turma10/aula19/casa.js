class Casa {
    listaPessoas = [];
    quantidadeFalta = 0;

    constructor() {

    }

    adicionarPessoa(nome, idade, medias) {
        this.listaPessoas.push({
            nome: nome,
            idade: idade,
            medias: medias
        });
    }

    exibirTodos() {
        this.listaPessoas.forEach(pessoa => {
            console.log(pessoa.nome, pessoa.idade);
        });
    }

    calcularMedia() {
        let total;

        this.listaPessoas.forEach(pessoa => {
            total = 0;

            pessoa.medias.forEach(nota => {
                total += nota;
            });

            console.log(`A sua média ${pessoa.nome} é ${total/pessoa.medias.length}`);
        });
    }

    aumentarFaltas() {
        this.quantidadeFalta++;
    }
}

const pessoa = new Casa();

//pessoa.calcularMedia();

//pessoa.aumentarFaltas();
//pessoa.aumentarFaltas();
//pessoa.aumentarFaltas();
//pessoa.aumentarFaltas();

//pessoa.exibirTodos();

module.exports = pessoa;