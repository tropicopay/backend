const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  avatar_url: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  cpf: { type: String, required: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 0 },
  created: { type: Date, required: true },
  updated: { type: Date },
});

UserSchema.post('validate', async (next) => {
  // eslint-disable-next-line no-param-reassign
  next.password = await bcryptjs.hash(next.password, 8);
});

// eslint-disable-next-line new-cap
module.exports = new mongoose.model('User', UserSchema);
