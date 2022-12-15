// O operador $gt seleciona os documentos em que o valor do atributo filtrado é maior do que (>) o valor especificado.

// O operador $lt seleciona os documentos em que o valor do atributo filtrado é menor do que (<) o valor especificado.

// O operador $and executa a operação lógica E num array de uma ou mais expressões e seleciona os documentos que satisfaçam todas as expressões no array.

db.produtos.find(
  { $and: [{ curtidas: { $gt: 10 } }, { curtidas: { $lt: 100 } }] },
  { nome: true, curtidas: true, _id: false },
);