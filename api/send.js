const mailgun = require('mailgun-js');

const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
});

export default async function handler(req, res) {
    const { body } = req;

    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const { name, email, phone, message } = body;

    // Log request data
    console.log('Received request:', body);

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
                return res.status(500).json({ error: 'Failed to send message: ' + error.message });
            }
            console.log('Mailgun response:', body);
            return res.status(200).json({ success: true, message: 'Message sent successfully' });
        });
    } catch (error) {
        console.error('Error processing the request:', error);
        return res.status(500).json({ error: 'Error processing the request.' });
    }
}
