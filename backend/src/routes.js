const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router(); //pegando o roteador do express e colocando numa var
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);

routes.post('/spots', upload.single('thumbnail'),SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store); //usuario criando uma reserva dentro desse id do Spot
//req.query = acessar o query params (para filtros) // get
//req.params.id = acessar route params (para edição e delete) // put
//req.body = acessar corpo da requisição (criação e edição de registros) // post


//para exportar as rotas para q a aplicação conheça essas rotas

module.exports = routes;