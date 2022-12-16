//  O $set altera o valor de um campo específico. Se o campo não existir, o operador $set adiciona um novo campo com o valor especificado.

db.produtos.updateMany(
  {},
  { $set: { avaliacao: 0 } },
);

db.produtos.updateMany({ "tags.0": { $eq: "bovino" } }, { $set: { avaliacao: 5 } });

db.produtos.updateMany({ "tags.0": { $eq: "ave" } }, { $set: { avaliacao: 3 } });

db.produtos.find(
  {},
  { nome: true, avaliacao: true, _id: false },
);