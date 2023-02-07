const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

class Chatbot {
    constructor() {
        this.previousMessage = null;
    }

    respond(message) {
        let response;
        if (this.previousMessage) {
            response = "You said: " + this.previousMessage + ". What else would you like to talk about?";
        } else {
            response = "Hello! How can I help you today?";
        }
        this.previousMessage = message;
        return response;
    }
}

const chatbot = new Chatbot();

app.post('/chat', (req, res) => {
    const message = req.body.message;
    const response = chatbot.respond(message);
    res.send({ response });
});

app.listen(8000, () => {
    console.log('Chatbot listening on port 8000!');
});
