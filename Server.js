const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailgun = require('mailgun-js');
const http = require('http');
const WebSocket = require('ws');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
});

// const secretKey = process.env.RECAPTCHA_SECRET_KEY;

app.use(bodyParser.json());
app.use(cors());

app.post('/send', async (req, res) => {
    const { name, email, phone, message /*, captchaToken*/ } = req.body;

    // Log request data
    console.log('Received request:', req.body);

    // // Verify the reCAPTCHA token
    // const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    try {
        // const response = await fetch(verificationUrl, {
        //     method: 'POST'
        // });
        // const body = await response.json();

        // if (!body.success) {
        //     return res.status(400).send('Failed to verify reCAPTCHA.');
        // }

        const data = {
            from: email,
            to: 'work.nour.nassar@gmail.com',
            subject: 'New Contact Form Submission',
            text: `You have a new message from ${name} (${email}, ${phone}):\n\n${message}`
        };

        mg
        .messages()
        .send(
            data, 
            (error, body) => {
            if (error) {
                console.error('Mailgun error:', error);
                return res.status(500).send('Failed to send message: ' + error.message);
            }
            console.log('Mailgun response:', body);
            res.status(200).send({ success: true, message: 'Message sent successfully' });
        });
    } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).send('Error processing the request.');
    }
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    console.log('New client connected');
    ws.on('message', message => {
        console.log('received: %s', message);
    });
    ws.send('something');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
