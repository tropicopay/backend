const { Router } = require('express');
const uploadConfig = require('./config/upload');
const multer = require('multer');
const upload = multer(uploadConfig);

const UserController = require('./controllers/UserController');

const routes = Router();

routes.post('/Users', UserController.store);
routes.get('/Users', UserController.index);
routes.delete('/Users', UserController.destroy);
routes.put('/Users', UserController.update);

routes.post('/Users', upload.single('thumbnail'), UserController.store);

module.exports = routes;
