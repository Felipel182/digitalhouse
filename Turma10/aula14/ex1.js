const filmes = [
    'Matrix 4',
    'Venon',
    'Alerta Vermelho',
    'Esquedrão 6',
    'Se beber não case',
    'Uma noite de crime',
    'Um amor para recordar'
];

const musicas = [
    'The doors',
    'System of Down',
    'AC/DC',
    'Mamonas Assassinas',
    'Nelson Nad'
];

function exibirFilmes(filmes) {

    filmes.forEach(function(filme) {
        console.log(filme);
    });

}

module.exports = { filmes, musicas, exibirFilmes };