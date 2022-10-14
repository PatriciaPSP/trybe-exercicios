function aVeryBigSum(array){

let soma = 0;
for(let index = 0; index < array.length; index+= 1){
  soma =  soma + array[index];
  }
  return soma;
}
console.log(aVeryBigSum([10, 20, 30, 30, 30]));