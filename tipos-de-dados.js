//de acordo com a especificação do JS há dois tipos de dados:
//   - primitivos: null, undefined, string, number, boolean e symbol
//   - derivados/objetos: objetos JS, funções, arrays e expressões regulares
//----------------------------------------------------------------------------------------
//dentro do js, pode se usar o operador "delete" para deletar propriedades de objetos
//ex:
var meuObj = {nome: 'Karol', idade:30};
delete meuObj.idade;
console.log(meuObj); //saída será Object {nome:Karol}
//----------------------------------------------------------------------------------------
