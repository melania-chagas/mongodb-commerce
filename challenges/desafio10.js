// O operador $lte seleciona os documentos em que o valor do atributo filtrado é menor ou igual (<=) ao valor especificado.
// O operador $gte seleciona os documentos em que o valor do atributo filtrado é maior ou igual (>=) ao valor especificado.

db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "proteínas",
      $and: [{ percentual: { $gte: 30 } }, { percentual: { $lte: 40 } }],
    },
  },
},
{ nome: true, _id: false });