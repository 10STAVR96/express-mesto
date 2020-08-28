const Card = require('../models/card');
const errors = require('./errors');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => errors(err, res));
};
module.exports.postCards = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => errors(err, res));
};
module.exports.deleteCardById = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Ошибка: такой карточки нет' });
        return;
      }
      res.send({ data: card });
    })
    .catch((err) => errors(err, res));
};
