// O operador $elemMatch seleciona os documentos que contêm um campo do tipo array com pelo menos um elemento que satisfaça todos os critérios de seleção especificados.

db.produtos.find({
  valoresNutricionais:
  { $elemMatch: { tipo: "calorias", quantidade: { $lt: 500 } } },
}, { nome: true, _id: false });