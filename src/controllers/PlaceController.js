const Place = require('../models/Place');

module.exports = {
  async store(req, res) {
    const {
      name,
      email,
      doc,
      password,
      latitude,
      longitude,
    } = req.body;

    let place = await Place.findOne({ email });

    try {
      if (!place) {
        const location = {
          type: 'Point',
          coordinates: [longitude, latitude],
        };

        place = await Place.create({
          name,
          email,
          doc,
          password,
          location,
          created: Date(),
        });

        res.json(place);
      } else {
        throw 'Place with this email already Exists';
      }
    } catch (err) {
      res.status(409).send('Erro. Local já cadastrado com esse email');
    }
  },

  async index(req, res) {
    const places = await Place.find();

    if (!places) {
      return 'No user found';
    }
    res.send(places);
  },

  async destroy(req, res) {
    const { _id } = req.query;

    place = await Place.findOne({ _id });

    try {
      if (place) {
        place = await Place.deleteOne({ _id });

        res.json(place);
      } else {
        throw 'Place not found';
      }
    } catch (err) {
      res.status(409).send('Erro. Local não localizado para exclusão');
    }
  },

  async update(req, res) {
    const {
      name, email, password, location,
    } = req.body;

    const { _id } = req.query;

    place = await Place.findOne({ _id });

    try {
      if (place) {
        place.name = name || place.name;
        place.email = email || place.email;
        place.password = password || place.password;
        place.location = location || place.location;

        place.save();

        res.json(place);
      } else {
        throw 'User not found';
      }
    } catch (err) {
      res.status(409).send('Erro. Não foi possível atualizar os dados do local.');
    }
  },
};
