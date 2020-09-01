const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    validate: {
      validator(v) {
        return v.match(/^((http|https):\/\/)(www\.)?([a-zA-Z0-9/.#$!@%&-]{1,200})\.([a-zA-Z]{2,10})([a-zA-Z0-9/.#_%!@-]{1,256})?$/);
      },
      message: 'Это не ссылка на картинку',
    },
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: [],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);