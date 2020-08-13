const cardsRouter = require('express').Router();
const path = require('path');
const fs = require('fs').promises;

const cards = path.join(__dirname, '../data/cards.json');
cardsRouter.get('/', (req, res) => {
  fs.readFile(cards, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({ error: err.toString() });
    });
});

module.exports = cardsRouter;
