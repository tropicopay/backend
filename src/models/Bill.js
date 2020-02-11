const mongoose = require('mongoose');
const ItemSchema = require('./utils/itemSchema');

const BillSchema = new mongoose.Schema({
  created: { type: Date, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    portion: {
      type: Number,
      required: true,
      default: 1,
    },
    paymentMethod: String,
    paid: { type: Boolean, default: false },
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
  },
  updated: Date,
  itens: [ItemSchema],
  total: { type: Number, required: true },
  paid: { type: Boolean, default: false },
});

module.exports = new mongoose.model('Bill', BillSchema);
