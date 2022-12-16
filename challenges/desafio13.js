// O $set altera o valor de um campo específico. Se o campo não existir, o operador $set adiciona um novo campo com o valor especificado.

db.produtos.updateMany(
  { },
  { $set: { criadoPor: "Ronald McDonald" } },
);

db.produtos.find({}, { nome: true, criadoPor: true, _id: false });