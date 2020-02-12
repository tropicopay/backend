const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const upload = multer(uploadConfig);

const UserController = require('./controllers/UserController');
const PlaceController = require('./controllers/PlaceController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

const pathUsers = '/Users';
routes.post(pathUsers, upload.single('avatarUser'), UserController.store);
routes.get(pathUsers, UserController.index);
routes.delete(pathUsers, UserController.destroy);
routes.put(pathUsers, UserController.update);

const pathPlaces = '/Places';
routes.post(pathPlaces, upload.single('avatarPlace'), PlaceController.store);
routes.post(pathPlaces, PlaceController.store);
routes.get(pathPlaces, PlaceController.index);
routes.delete(pathPlaces, PlaceController.destroy);
routes.put(pathPlaces, PlaceController.update);

// routes.post('/Sessions', SessionController.store);

module.exports = routes;
