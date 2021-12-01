function lacoFor(index, parar = 10) {

    for (index; index <= parar; index += 2) {
        console.log(index);
    }

}
//lacoFor(0, 10);

function lacoWhile(index, parar = 10) {

    while(true) {
        
        console.log(index);
        if (index === parar) {
            return;
        }

        index++;
    }

}

//lacoWhile(0, 10);

function lacoDoWhile(index, parar = 10) {

    do {
        console.log(index);

        index += 5;

    } while(index <= parar);

}

//lacoDoWhile(0, 15);

let lista = [10, 20, 30];

[10, 20, 30].forEach(function(numero) {
    console.log(numero);
})