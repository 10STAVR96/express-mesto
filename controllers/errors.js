function errors(err, res) {
  res.status((err.message) ? (err.code || 400) : 500).send({ message: err.message || 'Ошибка на сервере' });
}

module.exports = errors;
