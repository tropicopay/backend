const mongoose = require('mongoose');
const Bcrypt = require('bcrypt')

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

UserSchema.pre("save", function(next) {
  this.password = Bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = new mongoose.model('User', UserSchema);
