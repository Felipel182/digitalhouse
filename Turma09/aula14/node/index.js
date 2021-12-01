const moment = require('moment');

const data = new Date();

moment.locale('pt-br');

//console.log(data);
console.log(moment(data).format('dd'));