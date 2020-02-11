const mongoose = require('mongoose');
const PointSchema = require('./utils/pointSchema');

const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  doc: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Date, required: true },
  updated: { type: Date },
  location: { type: PointSchema, index: '2dsphere' },
});

module.exports = new mongoose.model('Place', PlaceSchema);
