const cardsRouter = require('express').Router();
const path = require('path');
const getFile = require('../helpers/readJson');

const cards = path.join(__dirname, '../data/cards.json');
cardsRouter.get('/', (req, res) => {
  getFile(cards)
    .then((data) => JSON.parse(data))
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({ message: err.toString() });
    });
});

module.exports = cardsRouter;
