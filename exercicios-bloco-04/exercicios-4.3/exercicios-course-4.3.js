//Eexercício de explicação usando baby steps
//Utilizando o array abaixo, percorra-o somando todos os valores. 
//Caso o valor final seja maior que 15, imprima-o. 
//Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":


//usando baby steps
//1- Adicionar o array;
//exercise.js
let fruits = [3, 4, 10, 1, 12];

//2- Criar uma variável com valor 0;

let sum = 0;
//3- Criar um loop que percorre o array;
for (let index = 0; index < fruits.length; index +=1);

//4- Incrementar a variável com o valor correspondente a cada loop;
sum += fruits[index];

//5- Criar um if com a condição da variável ser maior que 15;
if (sum > 15) {

} else {

}
//6- Caso a variável obedeça a condição. Imprimir a variável
console.log(sum);



//7- Caso não obedeça a condição. Imprimir a mensagem "valor menor que 16";
else {
  console.log('valor menor que 16');
}

//códigos completos abaixo

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}

//Após escrever cada algoritmo, responda novamente as seguintes perguntas:
//Eu resolvi o problema?
//Havia outras maneiras de resolver o problema?
//A maneira que eu escolhi foi a mais eficiente possível?
//Seria possível inverter ou retirar algum passo?
//Se eu fosse um computador, conseguiria entender todas as intruções?










//Exercício 01 - 
//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//O fatorial é representado pelo sinal !
//4! = (4 x 3 x 2 x 1) = 24;

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

//Exercício 02 -
// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra
// "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque
// por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);