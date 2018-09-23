var express = require('express');
var app = express();
var db = require('./db');
var UserController = require('./user/UserController');
var OrderController = require('./order/OrderController');
app.use('/users', UserController);
app.use('/orders', OrderController);

module.exports = app;