let matriz = [
    [
        [0],[1]
    ],
    [
        [2],[3]
    ]
];

console.table(matriz);

let matriz = [10];
matriz.push(15);
matriz.push(100);
matriz.push(50);
matriz.push('Texto');
matriz.push(true);
matriz.push({
    item: '10',
    valor: 50
});

console.log(matriz);

matriz.pop();
console.log(matriz);

matriz.unshift(150);
matriz.unshift(650);

console.log(matriz);

matriz.shift();

console.log(matriz);

matriz.splice(2, 2, 650, 800);

console.log(matriz);



