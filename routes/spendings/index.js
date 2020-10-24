const express = require('express');
const spendingsRouter = express.Router();

const spendingsService = require('../../services/spendings-service');

spendingsRouter.get('/', (req, res) => {
  spendingsService.getAllSpendings()
    .then(spendings => res.status(200).send(spendings));
});

spendingsRouter.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  spendingsService.getSpendingsByCategory(categoryId)
    .then(spendings => res.status(200).send(spendings));
});

spendingsRouter.post('/', (req, res) => {
  spendingsService.createSpending(req.body)
    .then(newSpending => res.status(201).send(newSpending));
});

module.exports = spendingsRouter;
