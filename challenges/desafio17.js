// Se a coleção não existir, então o insertOne() cria a coleção.
// https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/

db.resumoProdutos.insertOne(
  { franquia: "McDonalds",
 totalProdutos: db.produtos.countDocuments({}) },
);

db.resumoProdutos.find(
  {},
  { _id: false, franquia: true, totalProdutos: true },
);