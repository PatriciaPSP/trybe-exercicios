//se o parâmetro das variáveis forem diferentes do que está no if, a resposta vai mudar também
//Só deu uma resposta positiva pq comida e bebida são os elementos corretos que foram declarados
//e constam no if e else.

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão velho') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
