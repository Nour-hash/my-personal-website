const mailgun = require('mailgun-js');
require('dotenv').config();

const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
});

module.exports = async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Log request data
    console.log('Received request:', req.body);

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
