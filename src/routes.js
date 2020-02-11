const { Router } = require('express');

const UserController = require('./controllers/UserController');
const PlaceController = require('./controllers/PlaceController');

const routes = Router();

routes.post('/Users', UserController.store);
routes.get('/Users', UserController.index);
routes.delete('/Users', UserController.destroy);
routes.put('/Users', UserController.update);

routes.post('/Places', PlaceController.store);
routes.get('/Places', PlaceController.index);
routes.delete('/Places', PlaceController.destroy);
routes.put('/Places', PlaceController.update);

module.exports = routes;
