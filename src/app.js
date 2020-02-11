require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env',
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());

    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }


  routes() {
    this.express.use(routes);
  }
}

module.exports = new AppController().express;
