const express = require('express');

const messageRouter = express.Router();

let messageResponse = {
    sender: '',
    message: '',
    type: '',
};
messageRouter.post('/send', function (req, res, next) {
    let { peerId, message } = req.body;
    
    messageResponse.message = message;
    messageResponse.type = 'pm';
    messageResponse.sender = '123';

    req.io.emit(peerId, messageResponse);

    res.json({
        status: 'succeed',
    });
});

module.exports = messageRouter;
