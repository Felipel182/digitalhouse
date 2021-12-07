const Casa = {
    listaPessoas: [],
    nome: null,
    idade: null,
    adicionarPessoa: function(nome, idade) {
        this.nome = nome;
        this.idade = idade;

        const pessoa = {
            nome: this.nome,
            idade: this.idade
        }

        this.listaPessoas.push(pessoa);
    },
    exibirUltimaPessoa: function() {
        return `A última pessoa cadastrada foi ${this.nome} com a idade: ${this.idade}`;
    },  
    exportarLista: function() {
        return this.listaPessoas;
    }
}

module.exports = Casa;