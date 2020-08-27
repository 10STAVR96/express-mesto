const usersRouter = require('express').Router();
const { getUsers, getUsersById, createUser } = require('../controllers/users');

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUsersById);
usersRouter.post('/', createUser);

module.exports = usersRouter;
