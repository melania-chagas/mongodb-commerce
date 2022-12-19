// O operador $push adiciona um valor a um array. Se o campo não existir no documento, um novo array com o valor em um elemento será adicionado.

// https://www.mongodb.com/docs/manual/reference/operator/update/each/

db.produtos.updateMany(
  {}, {
  $push: {
    valoresNutricionais: {
      $each: [],
      $sort: { percentual: -1 },
    },
  },
  },
);

db.produtos.find(
  {},
  { _id: false, nome: true, valoresNutricionais: true },
);