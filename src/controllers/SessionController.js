const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const authConfig = require('../config/auth');

module.exports = {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(401)
          .json({ error: 'O usuário informado não foi encontrado' });
      }

      if (!(await bcryptjs.compare(password, user.password))) {
        return res
          .status(401)
          .json({ error: 'A senha informada está incorreta' });
      }

      const { _id, name } = user;

      return res.json({
        user: {
          id: _id,
          name,
          email,
        },
        token: jwt.sign({ id: _id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (error) {
      return res.status(500);
    }
  },
};
