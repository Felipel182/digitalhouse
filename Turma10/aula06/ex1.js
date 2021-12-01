//Atividade 2
const stringParaUrl = (string) => {
    return `http://www.${string}.com.br`;
}

stringParaUrl('google');

//Atividade 3
const frase = (string) => {
    return `${string}!`;
}

frase('Essa atividade foi mais divertida do que pintar com lukscolor uauuuuuuuuu');

//Atividade 4
const calculaIdadeCachorro = (idadeHumano) => {
    return idadeHumano * 7;
}

calculaIdadeCachorro(37);

//Atividade 5
const calculaHoraTrabalho = (salario) => {
    const total = salario / 160;

    return `R$ ${total.toFixed(2).replace('.', ',')}`;
}

calculaHoraTrabalho(6500);

//Atividade 6
const calculaImc = (altura, peso) => {
    const total = peso / Math.pow(altura, 2);
    return total.toFixed(2);
}

calculaImc(1.73, 67.7);

//Atividade 7
const minusculoParaMaiusculo = (frase) => {
    return frase.toUpperCase();
}

minusculoParaMaiusculo('frase toda em minusculo');

//Atividade 8

const retornaTipoParametro = (conteudo) => {
    return typeof conteudo;
}

retornaTipoParametro(['teste']);

//Atividade 9
const raioCirculo = (raio) => {
    const total = 2 * Math.PI * raio;

    return parseFloat(total.toFixed(2));
}

raioCirculo(5);
