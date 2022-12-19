// O operador $pull remove de um array existente todos os elementos com um ou mais valores que atendam à condição especificada.

db.produtos.updateMany(
  {},
  { $pull: { ingredientes: { $eq: "cebola" } } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);