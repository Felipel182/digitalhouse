let valor = '10';
const total = 100;

console.log(valor);

valor = parseInt(valor);

console.log(valor);

const teste = (valor) => {
    switch(valor) {
        case 1 :
        case 2 :
            return 'valor é 1 ou 2';
        case 5 :
            return 'valor é 5';
        case 10 :
            return 'valor é 10';
        default: 
            return 'O valor é diferente de 1, 2, 5 e 10';
    }    
}

console.log(teste(valor));


console.log('teste');