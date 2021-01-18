const express = require('express');
const init = express.Router();
const path = require('path');
const authRoute = require('./auth/auth');
const messageRouter = require('./messages/messages');
init.get('/', async function (req, res, next) {
    res.json({
        version: 1.0,
        name: 'Express.js & Socket.io API boilerplate',
    });
});

/**
 * Configure here all routes
 */
init.use('/auth/', authRoute);
init.use('/message/', messageRouter);

module.exports = init;
