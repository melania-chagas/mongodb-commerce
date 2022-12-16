// $slice para retornar, neste caso, os 3 primeiros elementos ordenados no array 'valoresNutricionais'.

// O operador $elemMatch seleciona os documentos que contêm um campo do tipo array com pelo menos um elemento que satisfaça todos os critérios de seleção especificados.

db.produtos.find(
  { ingredientes: { $elemMatch: { $eq: "picles" } } },
  { nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 }, _id: false },
);