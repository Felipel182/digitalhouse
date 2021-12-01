const soma = (num1, num2, resultado) => { 
    const total = num1 + num2;
    resultado(total);
}

function msg(total) {
    console.log(`O valor total  ${total}`);
}

const total = (valor) => {
    console.log(valor);
};

soma(5, 5, total);
soma(5, 5, msg);


const acaoCarro = (funcao) => {
    funcao();
}

const andar = () => {
    console.log('O carro está andando');
}

const parar = () => {
    console.log('O carro parou');
}

acaoCarro(andar);
acaoCarro(parar);

