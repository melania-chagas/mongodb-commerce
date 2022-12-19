// https://www.mongodb.com/docs/v6.0/reference/operator/update/each/
// https://www.mongodb.com/docs/v6.0/reference/operator/aggregation/sort/

db.produtos.updateMany(
  {},
  { $push: {
    tags: { $each: ["combo", "tasty"], $sort: 1 },
    },
  },
);

db.produtos.find(
  {},
  { _id: false, nome: true, tags: true },
);