const moment = require('moment');
moment.locale('pt-br');

const diasDoMesAtual = (mes, ano) => {
    let qtdDiasMesAtual = new Date(ano,mes,0).getDate();
    console.log(qtdDiasMesAtual);
    let datas = [];
    
    for(dia = 1; dia <= qtdDiasMesAtual; dia++) {
        
            let data = new Date(ano,mes-1,dia);
            datas.push(moment(data).format('DD/MM/YYYY'));
        
    }
    return datas.forEach(dias => {
        return console.log(dias);
    });
}


diasDoMesAtual(2, 2021);

console.log('------------------------');

const date = new Date();
diasDoMesAtual(moment(date).format('MM'), moment(date).format('YYYY'));