const User = require('../models/User');

module.exports = {
  async index(req, res) {
    let users = await User.find();
    
    if (!users) {
      return "No user found";
    } else {
      res.send(users);
    }
  },

};
