// O operador $eq seleciona os documentos em que o valor do atributo filtrado é igual ao valor especificado. Esse operador é equivalente ao filtro { campo: <valor> } e não tem nenhuma diferença de performance.

db.produtos.find(
  { $or: [{ curtidas: { $eq: 36 } }, { vendidos: { $eq: 85 } }] },
  { nome: true, curtidas: true, vendidos: true, _id: false },
);
