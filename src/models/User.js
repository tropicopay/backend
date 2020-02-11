const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cpf: { type: String, required: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 0 },
  created: { type: Date, required: true },
  updated: { type: Date },
});

module.exports = new mongoose.model('User', UserSchema);
