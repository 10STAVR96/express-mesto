const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        return v.match(/^((http|https):\/\/)(www\.)?([a-zA-Z0-9/.#$!@%&-]{1,200})\.([a-zA-Z]{2,10})([a-zA-Z0-9/.#_%!@-]{1,256})?$/);
      },
      message: 'Это не ссылка на картинку',
    },
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
