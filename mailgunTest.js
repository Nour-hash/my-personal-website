const mailgun = require('mailgun-js');
require('dotenv').config();

const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

mg.messages.create('sandbox24d3e385befc445190ebfd751e017d60.mailgun.org', {
    from: "Excited User <mailgun@sandbox24d3e385befc445190ebfd751e017d60.mailgun.org>",
    to: ["work.nour.nassar@gmail.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!",
    html: "<h1>Testing some Mailgun awesomeness!</h1>"
})
.then(msg => console.log(msg)) // logs response data
.catch(err => console.log(err)); // logs any error
