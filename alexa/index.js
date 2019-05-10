const express = require('express');
const app = express();
app.post('/', (req, res) =>
    res.send({
        version: '1.0',
        response: {
        shouldEndSession: false,
        outputSpeech: {
            type: 'SSML',
            text: 'Hello World! aiQo learn ',
            ssml: '<speak>Hello World!</speak>'
            }
        }
    }));
app.get('/', (req, res) =>
    res.send({
        version: '1.0',
        response: {
        shouldEndSession: false,
        outputSpeech: {
            type: 'SSML',
            text: 'Hello World! aiQo learn ',
            ssml: '<speak>Hello World!</speak>'
            }
        }
    }));
app.listen(5004, () => console.log('Example app listening on port 5004!'));