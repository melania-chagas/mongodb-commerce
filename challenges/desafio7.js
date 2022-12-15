// Ao usar $ne, o MongoDB seleciona os documentos em que o valor do atributo filtrado não é igual ao valor especificado.

// Quando o <boolean> é verdadeiro (true), o operador $exists encontra os documentos que contêm o atributo, incluindo os documentos em que o valor do atributo é igual a null. Se o <boolean> é falso (false), a consulta retorna somente os documentos que não contêm o atributo.

db.produtos.find(
  { $and: [{ vendidos: { $ne: 50 } }, { tags: { $exists: false } }] },
  { nome: true, vendidos: true, _id: false },
);