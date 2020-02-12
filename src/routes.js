const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const upload = multer(uploadConfig);

const auth = require('./middleware/auth');

const UserController = require('./controllers/UserController');
const PlaceController = require('./controllers/PlaceController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

routes.post('/Sessions', SessionController.store);
routes.post('/Users', upload.single('avatarUser'), UserController.store);

routes.use(auth);

routes.get('/Users', UserController.index);
routes.delete('/Users', UserController.destroy);
routes.put('/Users', UserController.update);

routes.post('/Places', upload.single('avatarPlace'), PlaceController.store);
routes.post('/Places', PlaceController.store);
routes.get('/Places', PlaceController.index);
routes.delete('/Places', PlaceController.destroy);
routes.put('/Places', PlaceController.update);

module.exports = routes;
