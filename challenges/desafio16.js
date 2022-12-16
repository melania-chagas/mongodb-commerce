// https://www.mongodb.com/developer/products/mongodb/bson-data-types-date/

db.produtos.updateOne(
  { nome: { $eq: "Big Mac" } }, 
  { $set: { ultimaModificacao: { $type: "date" } } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { nome: true, _id: false },
);