// Com o operador $inc você pode incrementar ou decrementar valores em um campo específico, utilizando tanto valores positivos quanto negativos.

// https://www.mongodb.com/docs/v6.0/reference/operator/update/inc/

db.produtos.updateMany(
  { },
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateMany(
  { nome: { $eq: "Big Mac" } },
  { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany(
  { tags: { $elemMatch: { $eq: "bovino" } } },
  { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, vendasPorDia: true },
);