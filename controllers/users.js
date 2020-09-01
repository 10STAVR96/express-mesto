const User = require('../models/user');
const errors = require('./errors');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => errors(err, res));
};
module.exports.getUsersById = (req, res) => {
  User.findOne({ _id: req.params.id })
    .orFail({ message: 'Нет пользователя с таким id', code: 404 })
    .then((user) => res.send({ data: user }))
    .catch((err) => errors(err, res));
};
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => errors(err, res));
};
module.exports.patchProfileInfo = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .orFail({ message: 'Нет пользователя с таким id', code: 404 })
    .then((user) => res.send({ data: user }))
    .catch((err) => errors(err, res));
};
module.exports.patchProfileAvatar = (req, res) => {
  const { link } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar: link }, { new: true, runValidators: true })
    .orFail({ message: 'Нет пользователя с таким id', code: 404 })
    .then((user) => res.send({ data: user }))
    .catch((err) => errors(err, res));
};
