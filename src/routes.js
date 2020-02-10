const { Router } = require('express');

const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/Users', UserController.index);

module.exports = routes;
