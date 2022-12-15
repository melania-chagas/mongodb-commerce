// delete.Many: esse método remove todos os documentos que satisfaçam o critério de seleção.

db.produtos.deleteMany({ curtidas: { $lt: 50 } });
db.produtos.find({}, { nome: true, _id: false });