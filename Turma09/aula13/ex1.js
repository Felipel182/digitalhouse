class Aluno {
    constructor(nome, sobrenome, idade, profissao) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.profissao = profissao;
    }

    exibirNome() {
        return this.nome;
    }
    exportarObjeto() {
        return {
            nome: this.nome,
            sobrenome: this.sobrenome,
            idade: this.idade,
            profissao: this.profissao
        }
    }
}

const aluno1 = new Aluno('Rodrigo', 'Sarri', 37, 'Analista de sistema');
const aluno2 = new Aluno('Ana', 'Barbosa', 20, 'Programadora');

console.log(aluno1.exportarObjeto());
console.log(aluno2.exportarObjeto());

let todosAlunos = [];
todosAlunos.push(aluno1, aluno2);

console.log(todosAlunos);
