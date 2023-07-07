const { v4 } = require("uuid");

module.exports = [
  {
    id: v4(),
    itemName: "income",
    amount: 500,
    date: new Date(2022, 11, 17),
    from: "employer",
    category: "income",
  },
  {
    id: v4(),
    itemName: "savings",
    amount: 150,
    date: new Date(2023, 0, 30),
    from: "bank",
    category: "savings",
  },
  {
    id: v4(),
    itemName: "cat food",
    amount: 15,
    date: new Date(2023, 6, 7),
    from: "pet store",
    category: "pets",
  },
];
