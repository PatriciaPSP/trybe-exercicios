//const cenouras = true;
//const leite = true;
//const arroz = true;
//const feijao = true;

//const listaDeCompras = cenouras && leite && arroz && feijao;

//A ordem que a operação vai obedecer, será da esquerda para a direita
//console.log(true && true); // true
//console.log(true && false); // false
//console.log(false && true); // false
//console.log(false && false); // false

//1- Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, 
//para representar as horas do dia.
//2- Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
//3- Implemente condicionais para que:

//Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na 
//variável "message".

//Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" 
//na variável "message".

//Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".

//Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".

//Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
//4- Agora imprima a variável message fora das suas condições.

const currentHour = 20;
let message;

if(currentHour > 22){
  console.log('Não deveríamos comer nada, é hora de dormir');
}
else if(currentHour >= 18 && currentHour < 22){
   console.log('Rango da noite, vamos jantar :D');
}
else if(currentHour >= 14 && currentHour < 18){
  console.log('Vamos fazer um bolo pro café da tarde?');  
} 
else if(currentHour >= 11 && currentHour <= 14){
  console.log('Hora do almoço!!!');
}
else if(currentHour >= 4 && currentHour <= 11){
  console.log('Hmmm, cheiro de café recém passado');
}
message;



