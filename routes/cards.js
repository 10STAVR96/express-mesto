const cardsRouter = require('express').Router();
const { getCards, postCards, deleteCardById } = require('../controllers/cards');

cardsRouter.get('/', getCards);
cardsRouter.post('/', postCards);
cardsRouter.delete('/:id', deleteCardById);

module.exports = cardsRouter;
