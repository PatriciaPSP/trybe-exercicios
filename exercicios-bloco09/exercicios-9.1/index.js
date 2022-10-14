// // pushNumberAsync.js

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

// // Saída:
// // [ 1, 2, 3 ]

// pushNumberAsync.js


// console.log é uma função síncrona, ele é executado antes de o setTimeout terminar, por isso ele //
// mostra somente 2,3.

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// const THREE_SECONDS = 3000;

// setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

// // Saída:
// // [2, 3]

// Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos

