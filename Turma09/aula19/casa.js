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

const pessoa = new Casa();

pessoa.adicionarPessoa('Rodrigo', 37, [10, 5, 6]);
pessoa.adicionarPessoa('Maria', 30, [1, 3, 6]);
pessoa.adicionarPessoa('Ana', 25, [10, 10, 10]);

// reduce com objetos
/*
const total = pessoa.listaPessoas.reduce((total, valor) => { 
    return total + valor.idade
}, 0);
*/

pessoa.calcularMedia();

//console.log(pessoa.listaPessoas[0]);

pessoa.aumentarFaltas(0);
pessoa.aumentarFaltas(0);

//console.log(pessoa.listaPessoas[0]);
//console.log(pessoa.listaPessoas);

//console.log(pessoa.listaPessoas);

module.exports = pessoa;

