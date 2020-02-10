const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // Define UserSchema
});

module.exports = new mongoose.model('User', UserSchema);
