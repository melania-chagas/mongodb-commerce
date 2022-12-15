// O operador $gt seleciona os documentos em que o valor do atributo filtrado é maior do que (>) o valor especificado.
// O operador $lt seleciona os documentos em que o valor do atributo filtrado é menor do que (<) o valor especificado.
// .sort({ vendidos: 1 }) ordena em ordem crescente.

db.produtos.find(
  { vendidos: { $gt: 50, $lt: 100 } },
  { nome: true, vendidos: true, _id: false },
).sort({ vendidos: 1 });