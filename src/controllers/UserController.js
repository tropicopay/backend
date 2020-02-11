const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const {
      name, email, cpf, password,
    } = req.body;

    user = await User.findOne({ email });

    try {
      if (!user) {
        user = await User.create({
          name,
          email,
          cpf,
          password,
          created: Date(),
        });

        res.json(user);
      } else {
        throw 'User Already Exists';
      }
    } catch (err) {
      res.status(409).send('Erro. Usuário já existente');
    }
  },

  async index(req, res) {
    const users = await User.find();

    if (!users) {
      return 'No user found';
    }
    res.send(users);
  },

  async destroy(req, res) {
    const { _id } = req.query;

    user = await User.findOne({ _id });

    try {
      if (user) {
        user = await User.deleteOne({ _id });

        res.json(user);
      } else {
        throw 'User not found';
      }
    } catch (err) {
      res.status(409).send('Erro. Usuário não localizado para exclusão');
    }
  },

  async update(req, res) {
    const {
      _id, name, email, password, balance,
    } = req.body;

    user = await User.findOne({ _id });

    try {
      if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;
        user.balance = balance || user.balance;

        user.save();

        res.json(user);
      } else {
        throw 'User not found';
      }
    } catch (err) {
      res.status(409).send('Erro. Não foi possível atualizar os dados do usuário.');
    }
  },
};
