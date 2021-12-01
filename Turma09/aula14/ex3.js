function exibirFilmes(lista) {
    lista.forEach(function(item) {
        console.log(item.toUpperCase());
    });
}

module.exports = { exibirFilmes };