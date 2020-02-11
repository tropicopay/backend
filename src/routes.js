const { Router } = require('express');

const UserController = require('./controllers/UserController');

const routes = Router();

routes.post('/Users', UserController.store);
routes.get('/Users', UserController.index);
routes.delete('/Users', UserController.destroy);
routes.put('/Users', UserController.update);

module.exports = routes;
