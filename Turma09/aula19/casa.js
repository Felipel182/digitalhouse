class Casa {
    listaPessoas = [];

    adicionarPessoa(nome, idade, valores) {
        this.listaPessoas.push({
            nome: nome,
            idade: idade,
            valores: valores,
            media: 0,
            faltas: 0
        });
    }

    calcularMedia() {
        let total;

        this.listaPessoas.forEach(pessoa => {
            total = 0;

            pessoa.valores.forEach(valor => {
                total += valor;
            });

            // console.log(total/pessoa.valores.length); exibir a média

            pessoa.media = total/pessoa.valores.length;

        });
    }

    aumentarFaltas(indice) {
        this.listaPessoas[indice].faltas++;
    }

}

module.exports = Casa;

