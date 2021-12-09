let listaPessoas = [];

const aluno = {
    nome: '',
    quantidade: 0,
    notas: [],
    construtor: function(nome, faltas, notas) {
        this.nome = nome;
        this.quantidade = faltas;
        this.notas = notas;
    }
}

const aluno1 = aluno.construtor('Rodrigo', 1, [7, 5, 9]);

console.log(aluno1);

