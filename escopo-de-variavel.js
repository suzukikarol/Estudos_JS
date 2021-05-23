//O escopo de variável se refere a que local que podemos acessar ela.
//Sendo assim podemos acessar elas globalmente ou localmente

var minhaVariavel = 'global';
var outraVariavel = 'global';

function minhaFuncao() {
    minhaVariavel = 'local';
    return minhaVariavel;
}

function outraFuncao() {
    outraVariavel = 'local';
    return outraVariavel;
}

//aqui o valor de "minhaVariavel" será global, pois a mesma está sendo chamada fora da função que a modifica e foi declarada de forma global
console.log(minhaVariavel);
//o retorno nesse caso da "minhaVariavel" será local , devido a alteração sofrida por ela na função
console.log(minhaFuncao());
//exibirá "global" pois está se referindo a variável antes da modificação dela na função
console.log(outraVariavel);
//exibirá o valor "local" pois é referente a variável que foi alterada e receber esse valor na função como valor de retorno
console.log(outraFuncao());
//exibirá o valor de "local" pois essa variável sofreu a alteração na função e foi chamada após a função que alterou seu valor
console.log(outraVariavel);

//Como uma forma de evitar que o código fique "ruim" e para seguir uma boa práticar, evitar, sempre que possível
//o uso de valores globais.