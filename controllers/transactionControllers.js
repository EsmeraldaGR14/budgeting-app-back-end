const express = require("express");
const router = express.Router();

let transactionsArr = require("../models/transactionModel");

// Get a list (or index) of all transactions
router.get("/", (req, res) => {
  res.send(transactionsArr);
});

// Get an individual view (show one transactions)
router.get("/:id", (req, res) => {
  let { id: transactionId } = req.params;

  let transaction = transactionsArr.find(({ id }) => id === transactionId);

  res.send(transaction);
});

// Create a new transactions
router.post("/", (req, res) => {
  const newTransaction = req.body;

  if (!newTransaction) {
    res.send("cannot create an empty transaction");
  } else {
    transactionsArr.push(newTransaction);
    res.json(transactionsArr);
  }
});

// Update a transactions

router.put("/:id", (req, res) => {
  const { id: transactionId } = req.params;

  // const transactionIndex = transactionsArr.findIndex(
  //   ({ id }) => id == transactionId
  // );
  let transaction = transactionsArr.find(({ id }) => id === transactionId);

  let index = transactionsArr.indexOf(transaction);
  if (index == -1) {
    res.redirect("/");
  } else {
    transactionsArr[index] = {
      ...transactionsArr[index],
      ...req.body,
    };
    res.json(transactionsArr[index]);
    // OR

    //   const updatedTransaction = {
    //     ...transactionsArr[transactionIndex],
    //     ...req.body,
    //   };
    //   transactionsArr.splice(transactionIndex, 1, updatedTransaction);
  }
});

// Delete a transactions
router.delete("/:id", (req, res) => {
  const { id: transactionId } = req.params;

  const transactionIndex = transactionsArr.findIndex(
    (transaction) => transaction.id === transactionId
  );

  if (transactionIndex === -1) {
    res.status(404).json({ status: false, message: "invalid item index" });
  } else {
    transactionsArr.splice(transactionIndex, 1);
    res.json(transactionsArr);
  }
});

module.exports = router;
