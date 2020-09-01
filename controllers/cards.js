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
  Card.deleteOne({ _id: req.params.id })
    .orFail({ message: 'Ошибка: карточки с таким id не существует', code: 404 })
    .then((card) => res.send({ data: card }))
    .catch((err) => errors(err, res));
};
module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .orFail({ message: 'Ошибка: карточки с таким id не существует', code: 404 })
    .then((user) => res.send({ data: user }))
    .catch((err) => errors(err, res));
};
module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .orFail({ message: 'Ошибка: карточки с таким id не существует', code: 404 })
    .then((user) => res.send({ data: user }))
    .catch((err) => errors(err, res));
};
