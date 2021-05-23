// O verdadeiro e falso em JS é um pouco confuso, comparado a outras linguagens
//abaixo segue exemplos do que JS considera como sendo true/false

testVerdade(true); // saída é true
testeFalso(false); //saída é false

testeVerdade(new Boolean(false))//saída é true, pois ele recebe um obj e obj será sempre true

testeFalso("");//saída é falso, pois sempre que a string estiver sem nada (=0) será false

testeVerdade("falso");//saída é true, pois é uma string >=1

//lembrando que "undefined" e "null" são considerados "false"
//number só é "false" para 0, valores negativos, NAN, caso contrário é "true"
//Object sempre será "true"