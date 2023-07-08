const { v4 } = require("uuid");

module.exports = [
  {
    id: v4(),
    itemName: "income",
    amount: 500,
    date: new Date(),
    from: "employer",
    category: "income",
  },
  {
    id: v4(),
    itemName: "savings",
    amount: 150,
    date: new Date(),
    from: "bank",
    category: "savings",
  },
  {
    id: v4(),
    itemName: "cat food",
    amount: 15,
    date: new Date(),
    from: "pet store",
    category: "pets",
  },
];
