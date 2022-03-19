//EXEMPLO:
//Valor do jantar R$80,00
//Valor da taxa do garçom R$8,00
//Valor total do jantar R$88,00

let jantar = 80;
//estabelece a var de % de taxa do garçom para que possa ser alterado o valor quando quiser
let garcom = 10;
//var recebendo uma variável atribuindo valor 0
let totalAPagar = 0;

//valor do jantar + taxa do garçom / por 100, primeiro resolve dentro do () 
//e depois o resultado mult por 80,00 que é o valor do jantar.

//reatribuição de var com um cálculo
totalAPagar = (80 + (garcom / 100) * 80);

console.log('Taxa do garçom: R$' + (garcom / 100) * 80 + ',00');
//exemplo acima concatenação com +
console.log(`Taxa do garçom: R$${((garcom / 100) * 80)},00`);
//exemplo acima concatenação com ${} display literals usando crase``
console.log(`Valor jantar: R$${jantar},00`);
//exemplo acima concatenação com ${} display literals usando crase``
console.log('Valor total do jantar: R$' + totalAPagar + ',00');
//exemplo acima concatenação com +