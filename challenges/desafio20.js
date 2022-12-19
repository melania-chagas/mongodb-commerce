// Uma maneira simples de remover o primeiro ou o último elemento de um array é utilizar o operador $pop.
// Passando o valor -1 ao operador $pop você removerá o primeiro elemento. Já ao passar o valor 1, você removerá o último elemento do array. 

db.produtos.updateMany(
  { nome: { $eq: "Quarteirão com Queijo" } },
  { $pop: { ingredientes: -1 } },
); 

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);