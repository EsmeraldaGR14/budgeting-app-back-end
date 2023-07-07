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
    id: "3a",
    itemName: "cat food",
    amonunt: 15,
    date: new Date(2023, 6, 7),
    from: "pet store",
    category: "pets",
  },
];
