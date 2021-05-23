// Operadores podem ser usados em diversas operações
//e dentro dos operadores ainda podemos encontrar uma gama
//de diversos operadores
//sendo eles : aritméticos, de atribuição, comparação, lógicos, bit a bit, unários, entre outros

var num = 0; // o operador igual aqui é um op.de atribuição, pois ele atribui o valor 0 à variável num

num = num + 2; //aqui temos o igual sendo de atribuição e o + sendo um op.aritmético somando um valor a outro

num = num++; // o ++ é um operador aritmético de incremento.
num = num--; //aqui o -- é um operador sritmético de decremento

num += 1; //aqui temos o operador de atribuição de soma que é +=

num == num; //o == usado aqui é um operador lógico de comparação, sendo esse operador chamado de "igual a"
num === num; //aqui o uso de 3 = é para comparar tanto o tipo quanto o valor do objeto/variável

true || false; //aqui temos um operador lógico de "ou"

num != true; //aqui temos um operador lógico de "diferente"

//o JS suporta operadores de "bit a bit" também
// sendo | -> operador de "ou" , ex: 5 | 1
// sendo & -> operador de "e" , ex: 5 & 1
//sendo ~ -> operador de negação, ex: 5 ~
//sendo ^ -> operador de exclusivo, ex: 5^1
//sendo << -> operador de deslocamento para esquerda
//sendo >> -> operador de deslocamento para direita

//TYPEOF -> deveolve o tipo da variável ou expressão
console.log('typeof num: ', typeof num); // saída será typeof num: number
console.log('typeof Karol :',typeof 'Karol');//saída será typeof Karol: string
console.log('typeof true :',typeof true);//saída será typeof true: boolean
console.log('typeof {name:Karol} :', typeof {name:'Karol'});//saída será typeof {name:Karol} : object