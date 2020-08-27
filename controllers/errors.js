function errors(err, res) {
  if (!err.message) {
    res.status(500).send({ message: 'Ошибка сервера' });
    return;
  }
  res.status(400).send({ message: err.message });
}

module.exports = errors;
