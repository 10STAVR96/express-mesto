const usersRouter = require('express').Router();
const {
  getUsers,
  getUsersById,
  createUser,
  patchProfileInfo,
  patchProfileAvatar,
} = require('../controllers/users');

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUsersById);
usersRouter.post('/', createUser);
usersRouter.patch('/me', patchProfileInfo);
usersRouter.patch('/me/avatar', patchProfileAvatar);

module.exports = usersRouter;
