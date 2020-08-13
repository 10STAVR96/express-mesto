const usersRouter = require('express').Router();
const path = require('path');
const fs = require('fs').promises;

const users = path.join(__dirname, '../data/user.json');
usersRouter.get('/', (req, res) => {
  fs.readFile(users, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({ error: err.toString() });
    });
});
usersRouter.get('/:id', (req, res) => {
  fs.readFile(users, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .then((result) => {
      const user = result.find((item) => item._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ error: err.toString() });
    });
});

module.exports = usersRouter;
