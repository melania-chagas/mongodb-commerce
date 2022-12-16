// Ao usar $ne, o MongoDB seleciona os documentos em que o valor do atributo filtrado não é igual ao valor especificado.

db.produtos.find(
  { $and: [{ nome: { $ne: "Big Mac" } }, { nome: { $ne: "McChicken" } }] },
  { nome: true, curtidas: true, vendidos: true, _id: false },
);