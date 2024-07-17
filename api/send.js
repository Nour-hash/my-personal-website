const mailgun = require('mailgun-js');
require('dotenv').config();

const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
});

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { name, email, phone, message } = req.body;

    console.log('Received request:', req.body); // Log request data for debugging

    try {
        const data = {
            from: email,
            to: 'work.nour.nassar@gmail.com',
            subject: 'New Contact Form Submission',
            text: `You have a new message from ${name} (${email}, ${phone}):\n\n${message}`
        };

        mg.messages().send(data, (error, body) => {
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
};
