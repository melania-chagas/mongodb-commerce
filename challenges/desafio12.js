// O método db.colecao.updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez.

// Ao utilizar o $ne, o MongoDB seleciona os documentos em que o valor do atributo filtrado não é igual ao valor especificado.

// O operador $addToSet é utilizado quando você precisa garantir que os valores de um array não sejam duplicados. Ou seja, ele garante que apenas valores únicos estejam presentes no array, tratando o array como se fosse um conjunto (uma vez que conjuntos, na matemática, não podem conter elementos duplicados).

db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find({}, { nome: true, ingredientes: true, _id: false });