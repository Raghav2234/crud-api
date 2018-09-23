var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())

var db = require('./db');
var UserController = require('./user/UserController');
var OrderController = require('./order/OrderController');
app.use('/users', UserController);
app.use('/orders', OrderController);

module.exports = app;