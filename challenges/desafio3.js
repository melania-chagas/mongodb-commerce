// .sort({ vendidos: -1 }) irá ordenar de forma decrescente.
db.produtos.find({},
  { nome: true, vendidos: true, _id: false }).sort({ vendidos: -1 }).limit(1);